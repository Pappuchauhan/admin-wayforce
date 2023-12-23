import React from 'react'

const EViewPostJobModal = () => {
  return (
    <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                WayForce
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="">Enter Reason For Cancel</label>
                <input
                  type="text"
                  placeholder="Reason"
                  className="form-control"
                />
              </div>
              <div className="my-3">
                <label htmlFor="">Status</label>
                <select name="" id="" className="form-control">
                  <option value={false}>False</option>
                  <option value={true}>true</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn-style">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EViewPostJobModal