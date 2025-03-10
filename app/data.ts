import path from "path"
import fs from "fs"

export interface Release {
    title: string
    artist: string
    imageUrl: string
    releaseDate: string
    bandcamp: string
    appleMusic: string
    spotify: string
}

// Function to get all releases from the content directory
export function getReleases(): Release[] {
    const contentDir = path.join(process.cwd(), 'app/content/releases')
    const fileNames = fs.readdirSync(contentDir)

    // Read each file and parse its JSON content
    const releases = fileNames.map(fileName => {
        const filePath = path.join(contentDir, fileName)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent) as Release
    })

    return releases.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
}
