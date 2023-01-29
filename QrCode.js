import QRScanner from 'react-native-qr-scanner';
 
class App extends React.Component {
  onSuccess(e) {
    console.log(e);
  }
 
  render() {
    return (
      <QRScanner onRead={this.onSuccess.bind(this)} />
    );
  }
}
