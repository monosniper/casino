import React, {useState} from 'react';
import Requirement1 from '../../assets/images/verification/1.png';
import Requirement2 from '../../assets/images/verification/2.png';
import Requirement3 from '../../assets/images/verification/3.png';
import Requirement4 from '../../assets/images/verification/4.png';
import {AiFillQuestionCircle, AiOutlineCheck, AiOutlineClose, BsFillImageFill, MdDeleteOutline} from "react-icons/all";
import {Col, Row} from "reactstrap";
import {Button, IconButton, Notification, Popover, SelectPicker, toaster, Whisper} from "rsuite";
import ImageUploading from "react-images-uploading";

const Verification = () => {

    const [type, setType] = useState('passport');

    const [verificationImages, setVerificationImages] = useState([]);
    const [verificationImagesLimit, setVerificationImagesLimit] = useState(3);

    const [selphieImages, setSelphieImages] = useState([]);
    const [innImages, setInnImages] = useState([]);

    const handleTypeChange = (val) => {

        setVerificationImages([]);
        setType(val);

        switch (val) {
            case 'passport':
                setVerificationImagesLimit(3);

                break;
            case 'id':
                setVerificationImagesLimit(2);

                break;
            case 'zagran':
                setVerificationImagesLimit(1);

                break;
        }
    }

    const onVerificationImageUpload = (imageList, addUpdateIndex) => {
        setVerificationImages([...verificationImages, ...imageList]);
    }

    const onSelphieImageUpload = (imageList, addUpdateIndex) => {
        setSelphieImages([...selphieImages, ...imageList])
    }

    const onInnImageUpload = (imageList, addUpdateIndex) => {
        setInnImages([...innImages, ...imageList])
    }

    const removeVerificationImage = (index) => {
        let newImages = [...verificationImages];
        newImages.splice(index, 1);
        setVerificationImages(newImages);
    }

    const removeSelphieImage = (index) => {
        let newImages = [...selphieImages];
        newImages.splice(index, 1);
        setSelphieImages(newImages);
    }

    const removeInnImage = (index) => {
        let newImages = [...innImages];
        newImages.splice(index, 1);
        setInnImages(newImages);
    }

    const submit = () => {
        if(verificationImages.length === verificationImagesLimit && selphieImages.length === 1 && innImages.length === 1) {
            // Request to server
        } else {
            toaster.push(
                <Notification type="error" header="Ошибка">
                    <p>Загрузите все необходимые фотографии!</p>
                </Notification>
            )
        }
    }

    return (
        <div>
            <h6 className="cabinet-title">Верификация</h6>
            <p>Для прохождения верификации Вы можете загрузить Ваши фото в этом разделе.</p>

            <h6 style={{marginTop: '2rem'}}><b>Общие требования к фото</b></h6>
            <p style={{marginTop: '.5rem'}}>- Формат изображения gif,jpg,png,jpeg, и pdf</p>

            <div className="requirements">
                <div className="requirements-item-wrapper">
                    <div className="requirements-item">
                        <span className="requirements-item-success"><AiOutlineCheck /></span>
                        <img className="requirements-item-photo" src={Requirement1}/>
                    </div>
                    <div className="requirements-item-title">
                        Документ хорошо виден включая все 4 угла
                    </div>
                </div>
                <div className="requirements-item-wrapper">
                    <div className="requirements-item">
                        <span className="requirements-item-success"><AiOutlineCheck /></span>
                        <img className="requirements-item-photo" src={Requirement2}/>
                    </div>
                    <div className="requirements-item-title">
                        Селфи с паспортом или ID картой
                    </div>
                </div>
                <div className="requirements-item-wrapper">
                    <div className="requirements-item">
                        <span className="requirements-item-error"><AiOutlineClose /></span>
                        <img className="requirements-item-photo" src={Requirement3}/>
                    </div>
                    <div className="requirements-item-title">
                        Не все 4 угла видны
                    </div>
                </div>
                <div className="requirements-item-wrapper">
                    <div className="requirements-item">
                        <span className="requirements-item-error"><AiOutlineClose /></span>
                        <img className="requirements-item-photo" src={Requirement4}/>
                    </div>
                    <div className="requirements-item-title">
                        Размытое изображение
                    </div>
                </div>
            </div>

            <h6 className="cabinet-title">Загрузка документов</h6>
            <Row style={{textAlign: 'center'}}>
                <Col sm={12} md={4}>
                    <h6>1. Подтверждение личности</h6>
                    <div>
                        <SelectPicker onChange={(val) => handleTypeChange(val)} style={{margin: '1rem .5rem'}} searchable={false} defaultValue={type} data={[
                            {
                                label: 'Паспорт',
                                value: 'passport',
                            },
                            {
                                label: 'ID карта',
                                value: 'id',
                            },
                            {
                                label: 'Загранпаспорт',
                                value: 'zagran',
                            },
                        ]} />

                        <Whisper
                            placement="top"
                            trigger="hover"
                            controlId="control-id-hover-enterable"
                            speaker={(<Popover className='popover' title="Title">
                                <p>This is a default Popover </p>
                                <p>Content</p>
                                <p>
                                    <a>link</a>
                                </p>
                            </Popover>)}
                            enterable
                        >
                            <span><AiFillQuestionCircle fontSize={20} /></span>
                        </Whisper>
                    </div>
                    <ImageUploading
                        acceptType={['png', 'jpg', 'jpeg', 'pdf', 'gif']}
                        value={verificationImages}
                        onChange={onVerificationImageUpload}
                        dataURLKey="data_url"
                    >
                        {({
                              onImageUpload,
                          }) => (
                            <Button disabled={verificationImages.length === verificationImagesLimit} onClick={onImageUpload} className='choose-photo-btn'>
                                <BsFillImageFill /> Выбрать фото
                            </Button>
                        )}
                    </ImageUploading>
                    {verificationImages.map(({file}, index) => (
                        <div className="image" key={index}>
                            <span className="image-name">{file.name}</span>
                            <span className="image-status">
                                <AiOutlineCheck /> Готово к отправке
                            </span>
                            <IconButton onClick={() => removeVerificationImage(index)} icon={<MdDeleteOutline />} />
                        </div>
                    ))}
                </Col>
                <Col sm={12} md={4}>
                    <h6>2. Селфи с документом</h6>
                    <ImageUploading
                        acceptType={['png', 'jpg', 'jpeg', 'pdf', 'gif']}
                        value={verificationImages}
                        onChange={onSelphieImageUpload}
                        dataURLKey="data_url"
                    >
                        {({
                              onImageUpload,
                          }) => (
                            <Button disabled={selphieImages.length === 1} onClick={onImageUpload} className='choose-photo-btn'>
                                <BsFillImageFill /> Выбрать фото
                            </Button>
                        )}
                    </ImageUploading>
                    <Whisper
                        placement="top"
                        trigger="hover"
                        controlId="control-id-hover-enterable"
                        speaker={(<Popover className='popover' title="Title">
                            <p>This is a default Popover </p>
                            <p>Content</p>
                            <p>
                                <a>link</a>
                            </p>
                        </Popover>)}
                        enterable
                    >
                        <span><AiFillQuestionCircle fontSize={20} /></span>
                    </Whisper>
                    {selphieImages.map(({file}, index) => (
                        <div className="image" key={index}>
                            <span className="image-name">{file.name}</span>
                            <span className="image-status">
                                <AiOutlineCheck /> Готово к отправке
                            </span>
                            <IconButton onClick={() => removeSelphieImage(index)} icon={<MdDeleteOutline />} />
                        </div>
                    ))}
                </Col>
                <Col sm={12} md={4}>
                    <h6>3. ИНН</h6>
                    <ImageUploading
                        acceptType={['png', 'jpg', 'jpeg', 'pdf', 'gif']}
                        value={verificationImages}
                        onChange={onInnImageUpload}
                        dataURLKey="data_url"
                    >
                        {({
                              onImageUpload,
                          }) => (
                            <Button disabled={innImages.length === 1} onClick={onImageUpload} className='choose-photo-btn'>
                                <BsFillImageFill /> Выбрать фото
                            </Button>
                        )}
                    </ImageUploading>
                    <Whisper
                        placement="top"
                        trigger="hover"
                        controlId="control-id-hover-enterable"
                        speaker={(<Popover className='popover' title="Title">
                            <p>This is a default Popover </p>
                            <p>Content</p>
                            <p>
                                <a>link</a>
                            </p>
                        </Popover>)}
                        enterable
                    >
                        <span><AiFillQuestionCircle fontSize={20} /></span>
                    </Whisper>

                    {innImages.map(({file}, index) => (
                        <div className="image" key={index}>
                            <span className="image-name">{file.name}</span>
                            <span className="image-status">
                                <AiOutlineCheck /> Готово к отправке
                            </span>
                            <IconButton onClick={() => removeInnImage(index)} icon={<MdDeleteOutline />} />
                        </div>
                    ))}
                </Col>
            </Row>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <Button onClick={submit} className='pink-btn btn-lg rounded'>Отправить</Button>
            </div>
        </div>
    );
};

export default Verification;