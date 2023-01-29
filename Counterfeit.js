import { Button } from 'react-native';
 
class ReportCounterfeitButton extends React.Component {
  onPress() {
    fetch('https://example.com/report', {
      method: 'POST',
      body: JSON.stringify({
        nft: this.props.nft,
        reason: 'Counterfeit'
      })
    });
  }
 
  render() {
    return <Button title="Report Counterfeit" onPress={this.onPress.bind(this)} />;
  }
}
