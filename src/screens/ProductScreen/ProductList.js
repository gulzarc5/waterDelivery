/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { useNavigation, DrawerActions } from '@react-navigation/native';
 import { ImageBackground, TextInput, AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, Button, ScrollView, TouchableOpacity, } from 'react-native';
 //  import styles1 from './style';
 import Mainstyles from '../../assets/style';
 import DropDownPicker from "react-native-custom-dropdown";
 import Foundation from 'react-native-vector-icons/Foundation';
 import HeaderComponent from '../../components/CommonScreen/Header'
 import FixedNavbar from '../../components/CommonScreen/FixedNavbar'
 import CustomText from '../../components/UI/CustomText';
 
 
 
 const ProductList = ({ route }) => {
   console.log(route.params);
   const navigation = useNavigation();
   const products = route.params ? route.params.products : [];
   const [productList,setProductList] =useState(route.params ? route.params.products : []);
   const sizeList = [{
      label: "All", value: "A", icon: () => <Foundation name="list" size={18} color="#777" />
    }];
   if (route.params && route.params.sizes.length > 0) {
    route.params.sizes.map((item)=>{
      sizeList.push({
        label: item.name, value: item.id, icon: () => <Foundation name="list" size={18} color="#777" />
      })
    })
   }

    const productFilter = (size_name) => {
      if (size_name == 'All') {
        setProductList(products);       
      } else {       
        setProductList(products.filter((item) => item.size_name == size_name));
      }
    }

   return (
    <View>
      {/* Header */}
      <HeaderComponent navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{minHeight:'100%' }}>
        {/* Divider */}
        <View style={Mainstyles.divider}></View>
        
        {/* Preoduct List */}
        <View style={styles.productSection}>
           <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <Text style={styles.productHeading}>Product List</Text>
            <DropDownPicker
                  items={sizeList}
                  defaultValue={null}
                  placeholder = "Please Select Size"
                  containerStyle={{height: 40,width:'50%'}}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start',
                      paddingLeft:10
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item => productFilter(item.label)}
              />
           </View>
           <View style={styles.productBlock}>
             {productList && productList.length === 0 ? (
              <View style={styles.noCarBlock}>
                <View style={styles.noCarInner}>
                  <Image 
                    style={{width:100,height:100,color:'#48BBEC',padding:10}} 
                    source= {require('../../assets/img/noItem.png')}
                  />
                </View>
                <CustomText style={{color:'#333',fontSize:25,marginTop:10}}>
                  No Product Found
                </CustomText>
                <TouchableOpacity style={styles.noCartButton} onPress={() => navigation.navigate('HomeScreen')}>
                  <Text style={styles.noCartText}>GO TO HOME</Text>
                </TouchableOpacity>
              </View>
             ) : (
               productList && productList.map((product,index) => {
                 return (
                  <TouchableOpacity key={index} activeOpacity={.9} style={styles.productItem} onPress={() => navigation.navigate('ProductSingleScreen', { product: product })}>
                    <View style={styles.productImage}>
                      <Image
                        source={{uri: product.image }}
                        style={{ width: 70, height: 70, resizeMode: 'contain' }}
                      />
                    </View>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                      <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                      <Text style={styles.productSize}>Size : {product.size_name}</Text>
                      <View style={styles.cartPrice}>
                        <Text style={styles.itemPrice}><Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: '#aaa' }}>₹{product.mrp}</Text> ₹{product.price} &nbsp;</Text>
                        <View style={styles.cartPriceDiscount}><Text style={styles.cartPriceDiscountText}>{product.product_discount}% off &nbsp;</Text></View>
                      </View>
                    </View>
                  </TouchableOpacity>
                 )
               })
             )}
          </View>
        </View>

        {/* Divider */}
        <View style={[Mainstyles.divider, { paddingBottom: 120 }]}></View>
      </ScrollView>
      <FixedNavbar navigation={navigation} style={styles.FixedNavbar} />
    </View>
   );
 };
 const styles = StyleSheet.create({
   header: { justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingBottom: 10, backgroundColor: '#fff', shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 10, },
   menuIcon: { fontSize: 40, color: '#777', alignSelf: 'flex-start', justifyContent: 'center', paddingTop: 10, },
 
   headerText: { fontSize: 30, fontWeight: "700", color: '#fff' },
   headerRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
   navLogo: { width: 100, height: 50, resizeMode: 'cover', marginRight: 120 },
   navIcon: { width: 30, height: 30, resizeMode: 'contain', alignSelf: 'flex-end' },
   navUser: { width: 40, height: 40, resizeMode: 'cover', alignSelf: 'flex-end', borderWidth: 1, borderRadius: 50, borderColor: '#bbb', marginTop: 10 },
   productSection: { backgroundColor: '#eee', marginBottom: 50 },
   productHeading: { fontSize: 16, color: '#333', padding: 3, alignSelf: 'flex-start', fontWeight: '700', paddingTop: 10, textTransform: 'uppercase', paddingLeft: 10, backgroundColor: '#fff', width: '50%', paddingBottom: 10 },
   productBlock: { flexDirection: 'row', flexWrap: 'wrap', borderRadius: 5, borderWidth: 1, borderColor: '#eee', overflow: 'hidden', borderBottomWidth: 0, backgroundColor: '#eee', justifyContent: 'space-between' },
   productItem: { flexDirection: 'column', width: "49.8%", alignItems: 'center', backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee', },
   productImage: { margin: 10, },
   productName: { fontSize: 15, color: '#333', fontWeight: '500' },
   productSize: { fontSize: 15, color: '#333', fontWeight: '500' },
   productPrice: { fontSize: 14, color: '#333', textAlign: 'left' },
   cartPrice: { textAlign: 'left', marginBottom: 10, flexDirection: 'row' },
   itemPrice: { fontSize: 15, fontWeight: '700' },
   // cartPriceDiscount: {backgroundColor:'green',borderRadius:15},
   cartPriceDiscountText: { fontSize: 15, fontWeight: "700", color: 'green', textAlign: 'left' },
   noCarBlock:{marginTop:'35%',justifyContent: 'center', alignItems: 'center',flexDirection:'column',width: '100%'  },
   // noCarInner:{shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,backgroundColor:'#fff',borderRadius:30,width:90},
   noCartButton: {padding: 10,backgroundColor:'#2c69bc',width:'50%',justifyContent:'center',marginTop:15},
   noCartText: {textAlign:'center',color:'#fff',},
 })
 
 export default ProductList;
 