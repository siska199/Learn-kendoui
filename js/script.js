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
  $("#feedItems").html(result);

  

});
