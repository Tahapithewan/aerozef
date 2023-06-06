import React from 'react'
import { useFormik } from 'formik'
import Navbar from '../../shared/Navbar/Navbar'
const Applicants = () => {
    let FormValues = {
        image : "",
        heading : "",
        description : "" ,
    }
    let {handleSubmit , handleChange ,touched ,errors} = useFormik({
        initialValues : FormValues,
        onSubmit : (data)=>{
            console.log(data)
        }
    })
  return (
    <>
    <Navbar />
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h2 className='text-light text-center my-3'>Applicant Form</h2>
                    </div>
                    <div className="card-body bg-light">
                        <div className="form-group">
                            <label htmlFor="IM" className='mb-3'><h4>Insert Image :</h4></label>
                            <input type="file" name="image" id="IM" className='form-control' />
                        </div>
                        <div className="form-group my-5">
                            <label htmlFor="HE" className='mb-3'><h4>Heading :</h4></label>
                            <input type="text" name="heading" id="HE" className='form-control' />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Applicants