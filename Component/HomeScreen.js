import React from 'react';
import {View,Text} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function App() { 
  const [selected, setSelected] = React.useState("");
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
  
    <View style={{backgroundColor:'black',flex:1}}>
      <Text style={{ paddingTop: 20, fontFamily: 'ABeeZee-Regular', color:'#fff', fontSize: 18,textAlign: "center", fontWeight: 'bold'}}>Silahkan Memilih Komponen Vape Yang Ingin Anda Rakit </Text>
    <View style={{paddingTop:30,paddingHorizontal:20}}>
    <SelectList 
        boxStyles={{backgroundColor:'white'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        dropdownStyles={{backgroundColor:'white'}}/>
      </View>
      <View style={{paddingTop:20,paddingHorizontal:20}}>
    <SelectList 
        boxStyles={{backgroundColor:'white'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        dropdownStyles={{backgroundColor:'white'}}/>
        </View>
        <View style={{paddingTop:20,paddingHorizontal:20}}>
    <SelectList 
        boxStyles={{backgroundColor:'white'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        dropdownStyles={{backgroundColor:'white'}}/>
        </View>
        <View style={{paddingTop:20,paddingHorizontal:20}}>
    <SelectList 
        boxStyles={{backgroundColor:'white'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        dropdownStyles={{backgroundColor:'white'}}/>
        </View>

        <View style={{marginTop: 25, paddingHorizontal: 20}}>
          <View style={{ backgroundColor: '#877b4e', paddingTop: 10, paddingBottom: 10, borderRadius: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, marginTop: 1, marginLeft: 15, paddingTop: 1, color: '#ffffff', fontWeight: 'bold'}}>Total Harga</Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 25, marginTop: 1, marginLeft: 15, paddingTop: 1, color: '#ffffff', fontWeight: 'bold'}}>Rp.3.850.000</Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, marginTop: 1, marginLeft: 15, paddingTop: 1, color: '#ffffff', fontWeight: 'bold'}}>*Harga Relatif Berbeda di Setiap Vape Store</Text>
          </View>
        </View>
    </View>
  )

};
