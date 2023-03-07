const Error = () => {

    return (
        <div className="misc-wrapper">
            <div>
                <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
                <Button
                    tag={Link}
                    to="/home"
                    color="primary"
                    className="btn-sm-block mb-2">
                    Quay lại trang chủ
                </Button>
            </div>
        </div>
    );
};
export default Error;