import app from './app';

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(app.get('port'), function runServer() {
    console.log(`Server on http://localhost:${app.get('port')}`);
});
