import firebase from 'firebase/app'
import 'firebase/firestore'
import { Row, Input, Text, Button, Card, Grid } from '@geist-ui/react'
import { useState } from 'react'

const WriteToCloudFirestore = () => {

    const [fio, setFio] = useState('');
    const [theme, setTheme] = useState('');
    const [arrayData, setArrayData] = useState([]);

    const sendData = () => {
        console.log(arrayData)
        // try {
        //     firebase
        //         .firestore()
        //         .collection('myCollection')
        //         .doc('my_document')
        //         .set({
        //             arrayData
        //         })
        //         .then(console.log("data send success!"))
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <Card>
                <Grid.Container gap={2} justify="center">
                    <Grid justify="center" xs={24}>
                        <Text h1>Страница создания доклада</Text>
                    </Grid>
                    <Grid xs={24}>
                        <Input 
                            value={fio} 
                            onChange={e => {
                                setArrayData([...arrayData, {fio : e.target.value, theme}])
                                setFio(e.target.value)
                            }} 
                            placeholder="ФИО" 
                        />
                    </Grid>
                    <Grid xs={24}>
                        <Input 
                            value={theme} 
                            onChange={e => {
                                setArrayData([...arrayData, {fio, theme: e.target.value}])
                                setTheme(e.target.value)
                            }} 
                            placeholder="Наименование темы" 
                        />
                    </Grid>
                    <Grid xs={24}>
                        <Button onClick={sendData} >
                            Сохранить
                        </Button>
                    </Grid>
                </Grid.Container>
            </Card>
        </>
    )
}

export default WriteToCloudFirestore