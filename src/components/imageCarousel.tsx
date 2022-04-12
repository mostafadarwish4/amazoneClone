import React, { useCallback, useState } from 'react';
import { FlatList,Image,StyleSheet,Text,View,useWindowDimensions } from 'react-native';

const ImageCarousel=({images}:{images:string[]})=>{
    const [active,setActive]=useState(0)
    const windowWidth=useWindowDimensions().width
    const viewConfig=useCallback(({viewableItems}:any)=>{
        if(viewableItems.length > 0){
            setActive(viewableItems[0].index);
        }
             },[])
    return(
        <View  >
            <FlatList 
             data={images}
             renderItem={({item})=>(
                    
                        <Image  source={{uri:item}} style={[styles.image,{width:windowWidth-40}]}/>
                    
                    )}
             horizontal
             showsHorizontalScrollIndicator={false}
             snapToInterval={windowWidth-20}
             snapToAlignment={'center'}
             decelerationRate={'fast'}
             viewabilityConfig={{
                 viewAreaCoveragePercentThreshold:50,
             }
             }
             onViewableItemsChanged={viewConfig}
             />

            <View style={styles.dots}>
                {
                images.map((img,i)=><View key={i} style={active===i?styles.activeDot:styles.dot}/>)   
                }
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        
    },
    image:{
        resizeMode:'stretch',
        height:250,
        margin:10,
        borderWidth:2,
        borderColor:"#ebeef0",
        borderRadius:10,
    },
    dots:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red',
        
    },
    dot:{
        height:15,
        width:15,
        borderRadius:15,
        borderColor:"red",
        backgroundColor:'#c2bdbc',
        marginHorizontal:5
    },
    activeDot:{
        backgroundColor:'#9e9e9e',
        width:20,
        height:20,
        borderRadius:20,
    }
})

export default ImageCarousel;