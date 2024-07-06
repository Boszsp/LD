import formidable from 'formidable';

export async function POST  ({ request }) {
  const form =  formidable({});

  return new Promise((resolve, reject) => {
    form.parse(request, (err, fields, files) => {
      if (err) {
        reject({ status: 500, body: 'Error parsing the file' });
      }

      // You can access the file(s) through files
      console.log(files.file);

      resolve({
        status: 200,
        body: { message: 'File uploaded successfully' }
      });
    });
  });
};
