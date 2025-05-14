import cloudinary from "@/lib/cloudinary"
import { Readable } from 'stream'

export const uploadToCloudinary = async (file: File): Promise<string> => {
    const buffer = Buffer.from(await file.arrayBuffer())
  
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: process.env.CLOUDINARY_FOLDER_NAME,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) return reject(error)
          resolve(result?.secure_url!)
        }
      )
  
      const readable = new Readable()
      readable._read = () => {}
      readable.push(buffer)
      readable.push(null)
      readable.pipe(uploadStream)
    })
  }