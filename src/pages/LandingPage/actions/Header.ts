import about from '../../../styles/about.module.scss'




export function toggleClass(classElement: string, newClassToggle: string) {
    const element = document.getElementsByClassName(classElement)
    element[0].classList.toggle(newClassToggle)
}

export function focusIn(elementName:string) {
    const element = document.getElementById(elementName)
     document.getElementById('Container')?.scrollTo({top: element?.offsetTop || 0, behavior: 'smooth'})
}