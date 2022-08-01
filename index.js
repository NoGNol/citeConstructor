const model = [
    {type: 'title', value: 'Hello from JS'},
    {type: 'text', value: 'some text'},
    {type: 'columns', value: [
        '1111111',
        '222222222',
        '333333333',
        '12312',
        '2131231'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''
    if (block.type === 'title'){
        html = title(block)
    } else if (block.type === 'text'){
        html = text(block)
    } else if (block.type === 'columns'){
        // html = `<div class="row">`
        // for(let i = 0; i < block.value.length; i++){
        //     let string = `
        //     <div class="col-sm">
        //         <p>${block.value[i]}</p>
        //     </div>
        //     `           
        //     html = html + string
        // }
        // console.log(block.value.length)
        // let endString = '</div>'
        // html = html + endString
        // console.log(html)
        html = columns(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})


function title(block){
    return `<div class="row">
                <div class="col-sm">
                 <h1>${block.value}</h1>
                </div>
            </div>`
}

function text(block){
    return `
    <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function columns(block){
    let html = `<div class="row">`
        for(let i = 0; i < block.value.length; i++){
            let string = `
            <div class="col-sm">
                <p>${block.value[i]}</p>
            </div>
            `           
            html = html + string
        }
        let endString = '</div>'
        html = html + endString
        return html
}