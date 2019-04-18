import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TabNameService {
    public tab1 = "accueil";
    public tab2 = "notification";
    public tab3 = "profil";
}