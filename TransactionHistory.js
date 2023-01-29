import { FlatList } from 'react-native';
 
class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }
 
  componentDidMount() {
    contract.getPastEvents('Transfer', {
      filter: { to: this.props.address },
      fromBlock: 0,
      toBlock: 'latest'
    }, (error, events) => {
      this.setState({ transactions: events });
    });
  }
 
  render() {
    return (
      <FlatList
        data={this.state.transactions}
        renderItem={({ item }) => <Transaction transaction={item} />}
        keyExtractor={item => item.transactionHash}
      />
    );
  }
}
