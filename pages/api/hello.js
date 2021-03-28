// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    [{ 
      name: 'Nelson Urbaneja' ,
      edad: 23
    },
    { 
      name: 'Juan Perez',
      edad: 25
    }]
  )
}
