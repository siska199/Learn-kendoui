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
});
