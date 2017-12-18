import React from 'react';
import { Image, Text, View, StyleSheet, AppRegistry } from 'react-native';

export default class Bananas extends React.Component {
	render() {
    let pic = {
      uri: 'http://soulscape.asia/wp-content/uploads/2015/07/flare-wellness-650.jpg'
    };
	let pics = {
	  uri: 'http://www.flarewellness.com/uploads/7/8/2/9/7829506/img-20170311-161013-813_orig.jpg'
	};
	let picss = {
	  uri: 'http://blackbox.sg//assets/img//imagedb/1467349575.jpg'
	};
	let picsss = {
		uri: 'https://static.vanitee.com/professional-profiles/o/fe124ffb778761bb85586e8fa2c85d809c888a05.png'
	};
	let star = {
		uri: 'https://mmmjustlovely.files.wordpress.com/2014/11/4-8-stars.png'
	};
	
	let pica = {
		uri: 'https://static.vanitee.com/photos/o/47e2abd98d2844291f882cbb69762f85436d6831.jpeg'
	};
	let picas = {
		uri: 'https://thumbor.vanitee.com/fEFuwAXx4clYHvDzgYet_elBUw8=/800x800/https://static.vanitee.com/photos/o/a0376043c98d37f60528f896fafc263c4b56240e.jpeg'
	};
	let picass = {
		uri: 'https://thumbor.vanitee.com/4ESsTLTPpw9P5TxUGENDqqv5MHQ=/800x800/https://static.vanitee.com/photos/o/fad880ed17554a4daef9026f8af9b092811a2238.jpeg'
	};
	let logo = {
		uri: 'http://beautyinsider.sg/wp-content/uploads/2017/04/Skosk-Beautique.jpg'
	};
	
	
	return (
		<View style={styles.container}>
			<Text>  </Text>
			<Text style={{justifyContent:'center', fontSize: 20, color:'darkgray', justifyContent: 'center', alignItems:'center'}}> Discover </Text>
			<Text>  </Text>
			
			<View style={{flexDirection:'row'}}>
				<Image source={pics} style={{width:90, height:100}}/>
				<Image source={pic} style={{width:170, height:100}}/>
				<Image source={picsss} style={{width:100, height:100}}/>
			</View>
			
			<View style={{flexDirection:'row'}}>
				<Image source={picss} style={{width:50, height:50}}/>
				<Text style={{fontSize:20, padding:10}}>flarewellness </Text>
			</View>
			
			<Text style={{fontSize:10, color: 'darkgray'}}> 2181 bookings              Beach Road . Housecall (+$30.00) </Text>
	
			<Text>    </Text>
			
			<Text style={styles.textstyle}>FRANK Organic Facial - FREE Aromatic Foots.. $68</Text>
			<Text style={{color:'darkgray'}}> -------------------------------------------------------------------------------------------</Text>
			<Text style={styles.textstyle}>Vitamin C Bio Brightening Facial - Free Aroma.. $68</Text>
			<Text style={{color:'darkgray'}}> -------------------------------------------------------------------------------------------</Text>
			<Text style={styles.textstyle}>JOIK Luxury Facial-FREE Aromatic Footsoak     $68</Text>
			<Text style={{color:'darkgray'}}> -------------------------------------------------------------------------------------------</Text>
			
			<View style={{flexDirection:'row' ,padding: 10}}>
				<Image source={picas} style={{width:120, height:100}}/>
				<Image source={pica} style={{width:120, height:100}}/>
				<Image source={picass} style={{width:120, height:100}}/>
			</View>
			
			<View style={{flexDirection:'row'}}>
				<Image source={logo} style={{width:100, height:50}}/>
				<Text style={{fontSize:20, padding:10}}>Skosk-Beautique</Text>
			</View>
			
			<Text style={{fontSize:10, color: 'darkgray'}}> 1929 bookings            		  Clementi</Text>
			
		</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex:1,
		flexDirection:'column',
	},
	textstyle: {
		fontSize: 15,
		color: 'darkgray',
		padding: 5,
	},
});
				