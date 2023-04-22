export default class App {
    constructor(root) {
        this.root = root;
        this.state = {
            items: [
                {id:1, text:'일 하기', complete:true},
                {id:2, text:'책 읽기', complete:false},
                {id:3, text:'빨래 하기', complete:false},
            ]
        }

        this.rootEl = document.createElement('div');
        this.h1 = document.createElement('h1');
        this.ul = document.createElement('ul');
    }

    render(){
        this.ul.innerHTML = '';

        this.h1.innerHTML = `TODO LIST`
        this.state.items.forEach(item =>{
            const li = document.createElement('li');
            li.onclick = ()=>{
                const newItems = [...this.state.items];
                const targetId = newItems.findIndex(i=> i.id === item.id);
                newItems[targetId].complete = !newItems[targetId].complete;
                this.state.items = newItems;
                this.render();
            }
            li.innerHTML = `<li class="${item.complete ? 'done' : ''}">${item.text}</li>`
            this.ul.appendChild(li);
        })

        this.rootEl.appendChild(this.h1);
        this.rootEl.appendChild(this.ul);
        this.root.appendChild(this.rootEl);
    }
}