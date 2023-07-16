import SideBar from "../components/SideBar";
import "./css/AdminCreateProperties.css"

function AdminCreateProperties() {
  return (
    <div className="ala">
      <SideBar />
      <div className="pl-64 form-cointerner">
        <form className="form-container">
          <h1 className="form-title">Create Property</h1>
          <div className="form-flex">
            <div className="form-flex1">
              <div className="form-input-group">
                <label className="form_label">Agent Name</label><br />
                <input type="text" className="form_input" placeholder="Agent Name" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label className="form_label">Name</label><br />
                <input type="text" className="form_input" placeholder="Name" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label className="form_label">Year Built</label><br />
                <input type="text" className="form_input" placeholder="Year Built" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label className="form_label">Square Footage</label><br />
                <input type="text" className="form_input" placeholder="Square Footage" /><br />
                <p className="form_input-error-message"></p>
              </div>
            </div>

            <div className="form-flex2">
              <div className="form-input-group">
                <label className="form_label">Price</label><br />
                <input type="text" className="form_input" placeholder="Price" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label className="form_label">Description</label><br />
                <input type="text" className="form_input" placeholder="Description" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label className="form_label">Address</label><br />
                <input type="text" className="form_input" placeholder="Address" /><br />
                <p className="form_input-error-message"></p>
              </div>

              <div className="form-input-group">
                <label>Image</label><br />
                <input type="file" className="form_input" placeholder="Image" /><br />
                <p className="form_input-error-message"></p>
              </div>
            </div>
          </div>



          <button type="submit" className="form_button">Create</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCreateProperties;
