import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    // create a private constructor that contains an HTMLUList element
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        // make the inner text equal to 'header'
        h4.innerText = heading;
        // add the h4 to the list
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p)

        // add the new list to the container
     if (position === 'start') {
        this.container.prepend(li);
    } else {
        this.container.append(li);
    }
    }
}