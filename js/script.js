$(function () {
  const data = [
    { product: "Dresses", isShipped: true, colors: ["red", "pink", "blue"] },
    {
      product: "T-shirts",
      isShipped: false,
      colors: ["green", "orange", "blue", "purple"],
    },
    {
      product: "Trousers",
      isShipped: true,
      colors: ["brown", "lime", "lightblue"],
    },
  ];

  //Extract the template content from script tag:
  const templateContent = $("#myTemplate").html();
  //Compile a template
  const template = kendo.template(templateContent);
  const result = kendo.render(template, data);
  //Where you while render or show it:
  $("#renderTemplate").html(result);

  //Example for external template loading 
  const templateV2 = kendo.template($("#myFeedItems").html())
  const dataV2 = [{Name: "Anton"}, { Name: "Michael"}, { Name: "John"}];
  const resultv2 = templateV2(dataV2)
  $("#feedItems").html(resultv2);

  //Example template try to make sure my understanding
  const dataV3 = {
    name : "Siska Apriana Rifianti",
    umur : 23
  }
  const templateV3 = kendo.template($("#myTemplateV3").html())
  $("#tryV3").html(templateV3(dataV3))

});
