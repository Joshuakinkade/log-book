'use server'

export async function signLogBook(form: FormData) {
    console.log(form.get('name'), form.get('message'));
}