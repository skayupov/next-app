import Head from 'next/head'
import Link from 'next/link'
import firebase from '../firebase/initFirebase'
import WriteToCloudFirestore from '../components/cloudFirestore/Write'
import { Page, Row, Text } from '@geist-ui/react'

firebase();

export default function Home() {
  return (
    <Page >
      <WriteToCloudFirestore/>
    </Page>
  )
}
