
import data from "./hardcodeData"

export const getNFT = (page, perPage) => Promise.resolve(
    data.slice(page, perPage)
)

export const getTotalNFT = () => Promise.resolve(
    data.length
)

export const editNft = (id, dataNews) => {
    data[id] = dataNews
    return Promise.resolve(
        data
    )
}



export const searchApi = (field, query) => Promise.resolve(
    data.filter((el) => el[field].toLowerCase().includes(query.toLowerCase()))
)

