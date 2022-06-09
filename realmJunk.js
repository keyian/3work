(async () => {
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema]
    });
  
    // Add a couple of Tasks in a single, atomic transaction WRITE
    // let task1, task2;
    // realm.write(() => {
    //   task1 = realm.create("Task", {
    //     _id: 1,
    //     name: "go grocery shopping",
    //     status: "Open",
    //   });
    //   task2 = realm.create("Task", {
    //     _id: 2,
    //     name: "go exercise",
    //     status: "Open",
    //   });
    //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
    // });
    // use task1 and task2
  
    // READ
    // const tasks = realm.objects("Task");
    // console.log(`The lists of tasks are: ${tasks.map((task)  => task.name)}`);
  
    //FILTER
    const filtered = realm.objects("Task").filtered("status = 'Open'");
    console.log(`The lists of open tasks are: ${filtered.map(
      (filtered) => filtered.name
    )}`)
  })();