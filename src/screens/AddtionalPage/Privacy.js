/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View,ScrollView} from 'react-native';
 import  Mainstyles from '../../assets/style';
 import HeaderComponent from '../../components/CommonScreen/NoTitleHeader';
 import FixedNavbar from '../../components/CommonScreen/FixedNavbar';  


 const RefundScreen = ({navigation}) => {  
  return (
    <View>
      {/* Header */}
      <HeaderComponent  navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%'}}>

        {/* Divider */}
        <View style={Mainstyles.divider}></View>
        
        {/* Notification */}      
        <View style={styles.cartSection}>
          <View style={styles.cartBlock}>

            {/* About */}
            <View style={styles.cartItem}>
              <Text style={styles.head}>PRIVACY POLICY</Text>
                <Text style={styles.para}>Effective date: October 6, 2021</Text>
                <Text style={styles.para}> Last updated on: October 6, 2021</Text>
                <Text style={styles.head}>1. GENERAL</Text>
                <Text style={styles.para}>a. This Mobile Application with the name of Pyaas ("App/Pyaas") is operated by Pyaas("/We/Our/Us"). We are committed to protecting and respecting
                    your privacy. We do collect your personal information and process your personal data in accordance with the IT Act, 2000 (21 of 2000) and other national and state laws which relate the processing of personal data. Please read the following carefully
                    to understand our views and practices regarding your personal data.</Text>
                <Text style={styles.para}>b. Downloading, accessing, or otherwise using the App indicates that you have read this Privacy Policy and consent to its terms. If you do not consent to the terms of this Privacy Policy, do not proceed to download, access, or otherwise use the App.</Text>
                <Text style={styles.para}>c. We collect your personal information in order to provide and continually improve our products and services.</Text>
                <Text style={styles.para}>d. Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically. The last updated date can found at the beginning of this policy.</Text>
                <Text style={styles.para}>e. All partner firms and any third-party working with or for Us, and who have access to personal information, will be expected to read and comply with this policy. </Text>
                <Text style={styles.head}>2. HOW WE COLLECT THE INFORMATION</Text>
                <Text style={styles.para}>a. From you directly and through this App: We may collect information through the App when you visit. The data we collect depends on the context of your interactions with our App.</Text>
                <Text style={styles.para}>b. Through business interaction: We may collect information through business interaction with you or your employees.</Text>
                <Text style={styles.para}>c. From other sources: We may receive information from other sources, such as public databases; joint marketing partners; social media platforms; or other third parties such as:</Text>
                <Text style={styles.para}>I. Information about your interactions with the products and services offered by our subsidiaries.</Text>
                <Text style={styles.head}>3. INFORMATION WE COLLECT</Text>
                <Text style={styles.para}>a. We collect information primarily to provide better services to all of our customers.</Text>
                <Text style={styles.para}>b. We collect the following information from you when you use or signup on our App:</Text>
                <Text style={styles.para}>Name, email, Phone number and address</Text>
            
                <Text style={styles.para}>c. When you visit our App, some information is automatically collected. This may include information such as the type of mobile device, Operating System (OS) running on your device, Internet Protocol (IP) address, unique user ID, access times, device
                    type, and language. We also collect information about how you use Our products or services.</Text>
                <Text style={styles.para}>d. We automatically collect purchase or content use history, which we sometimes aggregate with similar information from other customers to create features such as Best Seller, Top Rated, etc...</Text>
                <Text style={styles.para}>e. The information about your usage of the App, including crash logs and usage statistics.</Text>
                <Text style={styles.para}>f. Information about the location of your device, including geolocation information.</Text>
            
                <Text style={styles.para}>g. We will retain your information as long as we require this to provide you with the goods and services and for such period as mandated by the concerned laws.</Text>
                <Text style={styles.para}>h. If you opt to receive marketing correspondence from us, subscribe to our mailing list or newsletters, enter into any of our competitions or provide us with your details at networking events, we may use your personal data for our legitimate interests
                    in order to provide you with details about our goods, services, business updates and events.</Text>
                <Text style={styles.head}>4. HOW WE USE INFORMATION </Text>
                <Text style={styles.para}>a. We use the information we collect primarily to provide, maintain, protect and improve our current products and services.</Text>
                <Text style={styles.para}>b. We use the information collected through this App as described in this policy and we may use your information to:</Text>
                <Text style={styles.para}>I. Improve our services, App and how we operate our businesses;</Text>
                <Text style={styles.para}>II. Understand and enhance your experience using our App, products and services;</Text>
                <Text style={styles.para}>III. Personalize our products or services and make recommendations;</Text>
                <Text style={styles.para}>IV. Provide and deliver products and services you request;</Text>
                <Text style={styles.para}>V. Process, manage, complete, and account for transactions;</Text>
                <Text style={styles.para}>VI. Provide customer support and respond to your requests, comments, and inquiries;</Text>
                <Text style={styles.para}>VII. Create and manage the online accounts you manage on our App;</Text>
                <Text style={styles.para}>VIII. Send you related information, including confirmations, invoices, technical notices, updates, security alerts and support and administrative messages;</Text>
                <Text style={styles.para}>IX. Communicate with you about promotions, upcoming events and news about products and services;</Text>
                <Text style={styles.para}>X. We may process your personal information without your knowledge or consent where required by applicable law or regulation for the purposes of verification of identity or for prevention, detection or investigation, including of cyber incidents,
                    prosecution and punishment of offences;</Text>
                <Text style={styles.para}>XI. Protect, investigate and deter against fraudulent, unauthorized or illegal activity.</Text>
                <Text style={styles.head}>5. DATA TRANSFER</Text>
                <Text style={styles.para}>a. Information about our user is an important part of our business and we take due care.</Text>
                <Text style={styles.para}>b.We share your data with your consent or to complete any transaction or provide any product or service you have requested or authorized. We also share data with our affiliates and subsidiaries, with vendors working on our behalf.</Text>
                <Text style={styles.para}>c. We may employ other companies and individuals to perform functions on our behalf. The functions include fulfilling orders for products or services, delivering packages, sending postal mail and e-mail, removing repetitive information from customer
                    lists, providing marketing assistance, providing search results and links (including paid listings and links), processing payments, transmitting content, scoring credit risk, and providing customer service.</Text>
                <Text style={styles.para}>d. These third-party service providers have access to personal information needed to perform their functions but may not use it for other purposes. Further, they must process the personal information in accordance with this Privacy Policy and as permitted
                    by applicable data protection laws.</Text>
                <Text style={styles.para}>e. We release account and other personal information when we believe is appropriate to comply with the law, enforce or apply our conditions of use, and other agreements, protect the rights, property or safety of Us, our users or others. This includes
                    exchanging information with other companies and organizations for fraud protection and credit risk reduction.</Text>
                <Text style={styles.head}>6. DATA SECURITY</Text>
                <Text style={styles.para}>a. We take due care to protect customer data. Technical measures are in place to prevent unauthorized or unlawful access to data and against accidental loss or destruction of, or damage to the data. The employees who are dealing with the data have
                    been trained to protect the data from any illegal or unauthorized usage.</Text>
                <Text style={styles.para}>b. We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of personal customer information.</Text>
                <Text style={styles.para}>c. We take reasonable steps to help protect your personal information in an effort to prevent the loss, misuse, and unauthorized access, disclosure alteration and destruction. It is your responsibility to protect your user names and passwords to help
                    prevent anyone from accessing or abusing your accounts and services. You should not use or reuse the same passwords you use with other accounts as your password for our services.</Text>
                <Text style={styles.para}>d. It is important for you to protect against unauthorized access to your password and your devices, and applications. Be sure to sign off when you finish using a non-personal device.</Text>
                <Text style={styles.para}>e. Information you provide to us is shared on our secure servers. We have implemented appropriate physical, technical and organizational measures designed to secure your information against accidental loss and unauthorized access, use, alteration
                    or disclosure. In addition, we limit access to personal data to those employees, agents, contractors, and other third parties that have a legitimate business need for such access.</Text>
                <Text style={styles.para}>f. Information collected from you will be stored for such period as required to complete the transaction entered into with you or such period as mandated under the applicable laws.</Text>
                <Text style={styles.head}>7. LINKS TO THIRD PARTY SITE/APPS</Text>
                <Text style={styles.para}>Our App may, from time to time, contain links to and from other Apps/Websites of third parties. Please note that if you follow a link to any of these Apps/Websites, such Apps/Websites will apply different terms to the collection and privacy of your
                    personal data and we do not accept any responsibility or liability for these policies. When you leave our Site, we encourage you to read the privacy policy of every App/Website you visit.</Text>
                <Text style={styles.head}>8. SHARING OF PERSONAL INFORMATION</Text>
                <Text style={styles.para}>a. We do not share your personal data with third parties without your prior consent other than:</Text>
                <Text style={styles.para}>I. With third parties who work on our behalf provided such third parties adhere to the data protection principles set out in the IT Act, 2000 (21 of 2000) and other applicable legislation, or enter into a written agreement with Us requiring that the
                    third party provide at least the same level of privacy protection as is required by such principles;</Text>
                <Text style={styles.para}>II. To comply with laws or to respond to lawful requests and legal process;</Text>
                <Text style={styles.para}>III. To protect the rights and property of Us, our agents, customers, and others including to enforce our agreements, policies and terms of use;</Text>
                <Text style={styles.para}>IV. In an emergency, including to protect the personal safety of any person; and</Text>
                <Text style={styles.para}>V. For the purpose of a business deal (or negotiation of a business deal) involving the sale or transfer of all or a part of our business or assets (business deals may include, for example, any merger, financing, acquisition, divestiture or bankruptcy
                    transaction or proceeding).</Text>
                <Text style={styles.head}>9. CHILDREN</Text>
                <Text style={styles.para}>If you are under the age of 18 or the age of majority in the jurisdiction in which you reside, you may only use Our App with the consent of your parent or legal guardian. In any case, We will not be liable for any cause of action that arose due to
                    non-compliance with this section.</Text>
                <Text style={styles.head}>10. CHANGES TO THIS POLICY</Text>
                <Text style={styles.para}>We may change this policy from time to time. If we make any changes to this policy, we will change the "Last Updated" date above. You agree that your continued use of our services after such changes have been published to our services will constitute
                    your acceptance of such revised policy. </Text>
                <Text style={styles.para}>If you have any concern about privacy or grievances with Us, please contact us with a thorough description and we will try to resolve the issue for you.</Text>
            
                <Text style={styles.head}>Contact Details:</Text>
                <Text style={styles.para}>Name: Pankaj Nath</Text>
                <Text style={styles.para}>Phone: 60037 37738</Text>
                <Text style={styles.para}>Email: pyaasapp@gmail.com</Text>
                <Text style={styles.para}>Address: H/No. 3, Rajbari Path, Christan Basti, Guwahati - 781005, Assam, India</Text>
            </View>           

            {/* Divider */}
            <View style={[Mainstyles.divider, { paddingBottom: 120 }]}></View>

          </View>
          
        </View>
      </ScrollView>

      {/* Fixed Navbar */}
      <FixedNavbar navigation={navigation} style={styles.FixedNavbar} />

    </View>

  );
};
const styles = StyleSheet.create({
  header: { justifyContent: 'center', alignItems:'center', paddingLeft: 10, paddingRight:10, paddingBottom:10, backgroundColor:'#fff', shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 10,},
  
  headerText: {fontSize:30, fontWeight:"700",color:'#fff'},
  headerRow : {flexDirection: 'row',justifyContent:'space-between',width:'100%'},

  cartSection: {backgroundColor:'#eee', shadowColor: "#000", shadowOffset: {width: 0, height: 4,}, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8},
  cartBlock: {flexDirection:'row',flexWrap:'wrap',borderRadius:5,paddingHorizontal:5},
  cartItem: {flexDirection:'column',width:"100%",backgroundColor:'#fff',padding:10, borderWidth: 1, borderColor: '#ddd', borderRadius:10,},
  cartPointText: {fontSize:8,color:'green',fontWeight:'700',marginBottom:-3},
  head: {fontSize: 18,color:'#333',fontWeight:'700',marginBottom:8},
  para: {fontSize: 11,fontWeight:"500",color:'#000', textAlign:'justify'},
  
  cartItemBtnBlock: {marginVertical:5, flexDirection:'row',alignItems:'center'},
  statusHeader: {fontSize:12,color:'#333',fontWeight:'700'},
  statusBtn: {fontSize:12,paddingHorizontal:10,fontWeight:'700'},
})

export default RefundScreen;
