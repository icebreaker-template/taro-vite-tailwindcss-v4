import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index bg-[#123456]'>
      <Text className='text-[55rpx] text-[#fff]'>Hello world!</Text>
    </View>
  )
}
