var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8\u5207\u6362", {
    "+\u81ea\u52a8\u5207\u6362": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)quoracdn\.net$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/(?:^|\.)quora\.com$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/(?:^|\.)angularjs\.org$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/(?:^|\.)sinaapp\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wikimedia\.org$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/(?:^|\.)freenaturestock\.com$/.test(host)) return "DIRECT";
        if (/dromaeo/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/facebook/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/github/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/doubleclick/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/ggpht/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/google/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/gstatic\.com/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/gravatar/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/instagram/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/jsbin/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/jsfiddle/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/stackoverflow/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/twitter/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/w3schools/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/youtube/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/ytimg/.test(url)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/^www\.v2ex\.com$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        if (/^speakerdeck\.com$/.test(host)) return "+\u5185\u7f51\u4ee3\u7406";
        return "DIRECT";
    },
    "+\u5185\u7f51\u4ee3\u7406": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "PROXY 10.16.13.18:8080";
    }
});