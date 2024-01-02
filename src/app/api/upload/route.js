import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');
  const {name, type} = file;
  const data = await file.arrayBuffer();

  const s3client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const id = uniqid();
  const ext = name.split('.').slice(-1)[0];
  const newName = id + '.' + ext;

  const uploadCommand = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Body: data,
    ACL: 'public-read',
    ContentType: type,
    Key: newName,
  });

  await s3client.send(uploadCommand);

  return Response.json({name,ext,newName,id});
}


//******************************** */


// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { v4 as uuidv4 } from 'uuid';

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get('file');

//     if (!file) {
//       return {
//         statusCode: 400,
//         body: JSON.stringify({ error: 'No file uploaded.' }),
//       };
//     }

//     const { name, type } = file;
//     const data = await file.arrayBuffer();

//     const s3client = new S3Client({
//       region: 'ap-south-1',
//       credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       },
//     });

//     const id = uuidv4();
//     const ext = name.split('.').pop();
//     const newName = `${id}.${ext}`;

//     const uploadCommand = new PutObjectCommand({
//       Bucket: process.env.BUCKET_NAME,
//       Body: data,
//       ACL: 'public-read',
//       ContentType: type,
//       Key: newName,
//     });

//     await s3client.send(uploadCommand);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ name, ext, newName, id }),
//     };
//   } catch (error) {
//     console.error('Error handling file upload:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// }
