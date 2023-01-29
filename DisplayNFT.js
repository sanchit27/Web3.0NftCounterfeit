import { Text } from 'react-native';
 
class ProductInfo extends React.Component {
  render() {
    return (
      <View>
        <Text>Serial Number: {this.props.serialNumber}</Text>
        <Text>Date of Production: {this.props.date}</Text>
        <Text>Manufacturer: {this.props.manufacturer}</Text>
      </View>
    );
  }
}
