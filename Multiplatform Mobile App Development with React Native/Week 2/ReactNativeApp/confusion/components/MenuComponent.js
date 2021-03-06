import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import {  Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
      dishes: state.dishes
    }
  }

 
class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    };

    render() {

        const { navigate }  = this.props.navigation;

        const renderMenuItem = ({item, index}) => {
            return(
                <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('Dishdetail', { dishId: item.id })}
                        imageSrc={{ uri: baseUrl + item.image}}
                />
            ); 
        }

        if (this.props.dishes.isLoading) {
            return(
                <ScrollView>
                    <Card title="Menu">
                        <Loading/>
                    </Card>
                </ScrollView>
            );
        }
        else if(this.props.dishes.errMess) {
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            );
        }
        else{
            return(
                <FlatList
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            );
        }
    }
}

export default connect(mapStateToProps)(Menu);
