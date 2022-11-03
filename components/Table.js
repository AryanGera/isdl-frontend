import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Table = ({value}) => {
    const router = useRouter();
    const column = [
        {heading: 'Post'},
        {heading: 'Apply'},
        {heading: 'Attachment'},
    ]
  return (
    <table>
        <thead>
            <tr>
            {column.map((item,idx) => <TableHead item={item} />)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Assisant Professor</td>
                <td><input type="image" src="/btn.png" onClick = {() => {router.push({pathname: '/reg',query: {post: 'Assisant Professor', dep: value}})}} height={40} width={40}/></td>
                <td><input type="image" src="./pdf.png" height={40} width={40}/></td>
            </tr>
            {value != "option3" && <tr>
                <td>Associate Professor</td>
                <td><input type="image" src="/btn.png" onClick = {() => {router.push({pathname: '/reg',query: {post: 'Associate Professor', dep: value}})}} height={40} width={40}/></td>
                <td><input type="image" src="./pdf.png" height={40} width={40}/></td>
            </tr>}
            <tr>
                <td>Professor</td>
                <td><input type="image" src="/btn.png" onClick = {() => {router.push({pathname: '/reg',query: {post: 'Professor', dep: value}})}} height={40} width={40}/></td>
                <td><input type="image" src="./pdf.png" height={40} width={40}/></td>
            </tr>
        </tbody>
    </table>
  )

}
const TableHead = ({item}) => <th>{item.heading}</th>

export default Table