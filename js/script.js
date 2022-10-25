$(function () {
  $("#grid").kendoGrid({
    dataSource: {
      transport: {
        read: async function (e) {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          ).then((res) => res.json());
          const dataRes = res.map((data, i) => ({
            ...data,
            name: `name ${i}`,
            image:
              "https://i.pinimg.com/564x/bb/06/bf/bb06bf438532886a42d6a32f29db1632.jpg",
          }));
          e.success(dataRes);
        },
      },
    },
    height: 500,
    pageable: {
      buttonCount: 3,
      pageSize: 5,
      pageSizes: ["5", "10", "20", "50 ", "all"],
    },
    scrollable: true,
    selectable: true,
    filterable: {
      operators: {
        string: {
          contains: "Contains",
        },
      },
    },
    columns: [
      { field: "id", title: "", hidden: true },
      { field: "userId", title: "No" },
      { field: "name", title: "Name" },
      { field: "title", title: "Title" },
      {
        field: "body",
        title: "Body",
      },
      {
        filed: "image",
        title: "image",
        template: function (data) {
          return `<img width="50" height="50" src=${data.image} alt="User profile" />`;
        },
      },
    ],
  });

  $("#btnComments").on("click", async function () {
    const grid = $("#grid").data("kendoGrid");
    const selectedElm = grid.select();
    const data = grid.dataItem(selectedElm);
    console.log("data: ", data.id);
    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data.id}/comments`
    ).then((res) => res.json());
    console.log("comments: ", comments);

    const templateComments = kendo.template($("#myWindowComments").html());
    $("#windowComments").kendoWindow({
      height: 500,
      width: 500,
      title: `Comments Post with id: ${data.id}`,
      modal: true,
    });
    
    const windowCommentsElmn = $("#windowComments")
      .data("kendoWindow")
      .content(templateComments(comments));

    windowCommentsElmn.center().open();
  });
});
