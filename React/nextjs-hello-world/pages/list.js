/**
 * Created by quangh on 9/21/2017.
 */
import Layout from '../components/layout'
const numbers = [1,2,3,4,5]
const listItems = numbers.map((number)=>(
   <li key={number.toString()}>{number}</li>
));

export default ()=>(

    <Layout>
        <ul>{
            numbers.map((number, index)=>(
                <li key={index}>{number}</li>
            ))
        }</ul>
    </Layout>
)
