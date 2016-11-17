import Web3 from 'web3'
import React from 'react'
import {render} from 'react-dom'
import TheAnswer from './containers/answer'

class Index extends React.Component {

    constructor(props) {
        super(props)

        let web3 = new Web3()
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
        web3.eth.defaultAccount = web3.eth.accounts[0]

				const answerAbi = [{"constant":false,"inputs":[{"name":"_question","type":"string"}],"name":"setQuestion","outputs":[],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"question","type":"string"},{"indexed":false,"name":"answer","type":"uint256"}],"name":"Question","type":"event"}]
        const answerContract = web3.eth.contract(answerAbi)
        const contractAddress = '0x11bcf0e4dfeacd5d68a05180ceee4d50cc7cf720'
        const theAnswer = answerContract.at(contractAddress)

        this.state = {
            theAnswer: theAnswer
        }
    }

    render() {
        return (
            <div>
                <TheAnswer theAnswer={this.state.theAnswer}/>
            </div>
        )
    }
}

render(<Index/>, document.getElementById('app'));
