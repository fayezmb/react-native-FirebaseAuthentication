import React, { Component} from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';
class ListItem extends Component {
  renderDescription(){
    if (expanded){
      return (<CardSection><Text> {library.description} </Text></CardSection>);
    }
  }
  render(){
    const {titleStyle} =styles;
    const { id, title }= this.props.library;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback
      onPress= {() => this.proprs.selectLibrary(id)}>
      <View>
      <CardSection>
      <Text style={titleStyle}>
      {this.props.library.title}
      </Text>
      </CardSection>
      {this.renderDescription()}
      </View>
      </TouchableWithoutFeedback>
    )
  }
}
const styles= {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded= state.selectedLibraryID == ownProps.library.id;

  return {expanded};
};
export default connect(null, actions)(ListItem);
