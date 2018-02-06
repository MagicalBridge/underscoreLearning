var count = 3;
var tmp =
    '<% for (var i = 0; i < count; i++) { %>' +
    '<li class="market_productList paipaidai_mk">' +
    '<div class="market_productList_logo">' +
    '<a href="javascript:;">' +
    '<img src="./images/ppdai_market.png" alt="<%=name%>">' +
    '</a>' +
    '</div>' +
    '<ul class="market_productList_detail">' +
    '<li class="market_intro">' +
    '<p class="market_intro_name"><%=name%></p>' +
    '<p class="market_intro_des"><%=intro%></p>' +
    '</li>' +
    '<li class="market_select">' +
    '<span></span>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '<% } %>';

var temp = _.template(tmp)
var str = temp({
    name: "拍拍贷",
    intro: "我们都是好孩子"
});
$("#test").append(str);