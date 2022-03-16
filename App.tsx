import React from "react"
import { Button, View } from "react-native"
import Toast, { ErrorToast, SuccessToast } from 'react-native-toast-message';

function ToastButton() {
  return (
    <Button
      title="Toast"
      onPress={()=>{
        Toast.show({
          type: 'error',
          text1: 'Example text1', text2: 'Example text2',
          onHide: ()=>{
            console.log('Toast onHide routine')
          }})
      }}
    />
  )
}

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ToastButton/>
    <Toast
      config={{
        error: params=>{
          return (
              <ErrorToast
                  text1NumberOfLines={10}
                  {...params}
                  text1Style={{
                    fontSize: 30
                  }}
                  text2Style={{
                    fontSize: 20
                  }}
              />
          )
        },
        success: params=>{
            return (
                <SuccessToast
                    {...params}
                    text1NumberOfLines={10}
                    text1Style={{
                      fontSize: 30
                    }}
                    text2Style={{
                      fontSize: 20
                    }}
                />
            )
        }
      }}
      position='bottom'
    />
    </View>
  )
}