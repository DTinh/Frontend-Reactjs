import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';

class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) { }


    }

    toggle = () => {

    }


    render() {
        let { isOpenModal, closeBookingClose, dataTime } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }
        // let doctorId = dataTime && !_isEmply(dataTime) ? dataTime.doctorId : '';

        return (
            <Modal
                isOpen={isOpenModal}
                toggle={this.toggle}
                className={'booking-modal-container'}
                size='lg'
                centered
            // backdrop={true}
            >
                <div className='booking-modal-content'>
                    <div className='booking-modal-header'>
                        <span className='left'>Thông tin đặ lịch khám bệnh</span>
                        <span className='right'
                            onClick={closeBookingClose}
                        ><i className='fas fa-times'></i></span>
                    </div>
                    <div className='booking-modal-body'>
                        {/* {JSON.stringify(dataTime)} */}
                        <div className='doctor-infor'>
                            <ProfileDoctor
                                doctorId={doctorId}
                                isShowDescriptionDoctor={false}
                                dataTime={dataTime}
                            />
                        </div>

                        <div className='row'>
                            <div className='col-6 form-group mt-2'>
                                <label>Ho ten</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-group mt-2'>
                                <label>So dien thoai</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-group mt-2'>
                                <label>Dia chi Email</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-group mt-2'>
                                <label>Dia chi lien he</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-12 form-group mt-2'>
                                <label>Ly do kham</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-group mt-2'>
                                <label>Dat cho ai</label>
                                <input className='form-control' />
                            </div>
                            <div className='col-6 form-group mt-2'>
                                <label>Gioi tinh</label>
                                <input className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='booking-modal-footer'>
                        <button className='btn-booking-confirm'>Xác nhận</button>
                        <button className='btn-booking-cancel'
                            onClick={closeBookingClose}
                        >Hủy</button>
                    </div>
                </div>

            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);