import React from 'react';

export const FormLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Hasil Lab</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            
            <div className="form-group">
                <label>Jenis Pemeriksaan<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"/>
            </div>

            <div className="form-group">
                <label>Hasil Lab<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"/>
            </div>
            
            <div className="form-group">
                <label>Tanggal Pengajuan<span style={{ color: 'red' }}>*</span></label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            <button className="btn btn-success" value="submit">Submit</button>
        </form>
    )
}