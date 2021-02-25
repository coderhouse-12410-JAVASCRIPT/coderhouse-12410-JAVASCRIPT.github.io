let project_list = $("body > div > section > div > div:nth-child(2)");

for (const iterator of projects.project_list) {
    console.log(iterator);
    let project = new Project(iterator);
    project_list.append(project);
}