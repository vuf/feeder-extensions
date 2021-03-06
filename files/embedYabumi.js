// Yabumiを展開する拡張機能

(function(self, common, ext, fqon) {
	return {
		'constructor': function() {
			common.addFilter('output', 'embedYabumi', function(entries, skelton) {
				entries = common.replaceURLs(entries, function(url, entry) {
					var matches = url.match(/^https:\/\/yabumi\.cc\/([\da-f]+)(?:\.\w+)$/i);
					if (matches) {
						return '<img src="'+common.loadingImage+'" alt="'+url+'" data-original="https://yabumi.cc/api/images/'+matches[1]+'.png?convert=low&resize='+common.embedWidth+'x" class="extension-embed-image" />';
					}
				});
				return entries;
			});
		},
		'destructor': function() {
			common.removeFilter('output', 'embedYabumi');
		},
	};
});