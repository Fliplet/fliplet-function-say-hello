Fliplet.Functions.register('com.example.function.say-hello', function(settings, context) {
 return Promise.resolve({'settings': settings, 'context': context})
})