export const scrollToTop = () => {
    window.scrollTo({
          top: 0,
          behavior: 'instant'
        })
}

export const createTags = (name, container) => {
    const matches = [...name.matchAll(/\((.*?)\)/g)]
    const cleanName = name.replace(/\(.*?\)/g, '').trim()

    matches.forEach(match => {
        const tagText = match[1]
        const tag = document.createElement('div')
        tag.textContent = tagText   
        
        if(tagText.includes('X-Antibody')) {
            tag.className = 'tag-container tag-xantibody'
        }
        else if(tagText.includes('Virus')) {
            tag.className = 'tag-container tag-virus'
        }
        else if(tagText.includes('Black')) {
            tag.className = 'tag-container tag-black'
        }
        else if(tagText.includes('Blue')) {
            tag.className = 'tag-container tag-blue'
        }
        else if(tagText.includes('Red')) {
            tag.className = 'tag-container tag-red'
        }
        else {
            tag.className = 'tag-container tag-generic'
        }
        container.appendChild(tag)
    })
    return cleanName
}