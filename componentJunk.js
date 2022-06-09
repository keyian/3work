<SafeAreaView>
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
            <TextBar key={1} text={text} setText={setText} placeholder="hey" />
            <Button title="Click Me" onPress={onPressAddLetters} />
        </View>
      </ScrollView>
    </SafeAreaView>