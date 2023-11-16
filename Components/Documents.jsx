import { Button } from "@material-ui/core"
import { Publish, CloudUpload } from "@material-ui/icons"
import { useEffect, useRef, useState, useCallback } from "react"


const Documents = () => {
    const first = useRef()
    const [show, setshow] = useState(false)
    console.log(show)
    const handleDisplay = () => {
        setshow(true)
    }

    return (
        <div className="documents">
            <div className="document_form_container">
                <label htmlFor="transfer_document">
                    upload screenshot of transfer
                    <CloudUpload />
                </label>
                <input onChange={handleDisplay} ref={first} type="file" id="transfer_document" name="transfer image" accept="image/*" />
                <div style={{ display: show === true ? "block" : "none" }}>
                    <Button variant="contained" color="primary">
                        <Publish />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Documents