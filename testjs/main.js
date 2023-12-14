var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
function render(courses) {
    var ul = document.querySelector('.courses-list')
    var html = courses.map(
        function(course) {
            return `<li>${course}</li>`;
        }
    )
    console.log(html)

    return ul.innerHTML = `${html.join(' ')}`
}
render(courses)

