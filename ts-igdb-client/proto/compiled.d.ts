// DO NOT EDIT! This is a generated file. Edit the source file instead and regenerate.

export namespace proto {

    interface ICount extends proto.Count.$Properties {
    }

    class Count {
        constructor(properties?: proto.Count.$Properties);
        $unknowns?: Uint8Array[];
        count: number;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Count {
        interface $Properties {
            count?: (number|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Count.$Properties;
    }

    interface IMultiQueryResult extends proto.MultiQueryResult.$Properties {
    }

    class MultiQueryResult {
        constructor(properties?: proto.MultiQueryResult.$Properties);
        $unknowns?: Uint8Array[];
        name: string;
        results: Uint8Array[];
        count: number;
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiQueryResult {
        interface $Properties {
            name?: (string|null);
            results?: (Uint8Array[]|null);
            count?: (number|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.MultiQueryResult.$Properties;
    }

    interface IMultiQueryResultArray extends proto.MultiQueryResultArray.$Properties {
    }

    class MultiQueryResultArray {
        constructor(properties?: proto.MultiQueryResultArray.$Properties);
        $unknowns?: Uint8Array[];
        result: proto.MultiQueryResult.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiQueryResultArray {
        interface $Properties {
            result?: (proto.MultiQueryResult.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.MultiQueryResultArray.$Properties;
    }

    interface IAgeRatingResult extends proto.AgeRatingResult.$Properties {
    }

    class AgeRatingResult {
        constructor(properties?: proto.AgeRatingResult.$Properties);
        $unknowns?: Uint8Array[];
        ageratings: proto.AgeRating.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingResult {
        interface $Properties {
            ageratings?: (proto.AgeRating.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingResult.$Properties;
    }

    interface IAgeRating extends proto.AgeRating.$Properties {
    }

    class AgeRating {
        constructor(properties?: proto.AgeRating.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.AgeRatingCategoryEnum;
        content_descriptions: proto.AgeRatingContentDescription.$Properties[];
        rating: proto.AgeRatingRatingEnum;
        rating_cover_url: string;
        synopsis: string;
        checksum: string;
        organization?: (proto.AgeRatingOrganization.$Properties|null);
        rating_category?: (proto.AgeRatingCategory.$Properties|null);
        rating_content_descriptions: proto.AgeRatingContentDescriptionV2.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRating {
        interface $Properties {
            id?: (number|null);
            category?: (proto.AgeRatingCategoryEnum|null);
            content_descriptions?: (proto.AgeRatingContentDescription.$Properties[]|null);
            rating?: (proto.AgeRatingRatingEnum|null);
            rating_cover_url?: (string|null);
            synopsis?: (string|null);
            checksum?: (string|null);
            organization?: (proto.AgeRatingOrganization.$Properties|null);
            rating_category?: (proto.AgeRatingCategory.$Properties|null);
            rating_content_descriptions?: (proto.AgeRatingContentDescriptionV2.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRating.$Properties;
    }

    enum AgeRatingCategoryEnum {
        AGERATING_CATEGORY_NULL = 0,
        ESRB = 1,
        PEGI = 2,
        CERO = 3,
        USK = 4,
        GRAC = 5,
        CLASS_IND = 6,
        ACB = 7
    }

    enum AgeRatingRatingEnum {
        AGERATING_RATING_NULL = 0,
        THREE = 1,
        SEVEN = 2,
        TWELVE = 3,
        SIXTEEN = 4,
        EIGHTEEN = 5,
        RP = 6,
        EC = 7,
        E = 8,
        E10 = 9,
        T = 10,
        M = 11,
        AO = 12,
        CERO_A = 13,
        CERO_B = 14,
        CERO_C = 15,
        CERO_D = 16,
        CERO_Z = 17,
        USK_0 = 18,
        USK_6 = 19,
        USK_12 = 20,
        USK_16 = 21,
        USK_18 = 22,
        GRAC_ALL = 23,
        GRAC_TWELVE = 24,
        GRAC_FIFTEEN = 25,
        GRAC_EIGHTEEN = 26,
        GRAC_TESTING = 27,
        CLASS_IND_L = 28,
        CLASS_IND_TEN = 29,
        CLASS_IND_TWELVE = 30,
        CLASS_IND_FOURTEEN = 31,
        CLASS_IND_SIXTEEN = 32,
        CLASS_IND_EIGHTEEN = 33,
        ACB_G = 34,
        ACB_PG = 35,
        ACB_M = 36,
        ACB_MA15 = 37,
        ACB_R18 = 38,
        ACB_RC = 39
    }

    interface IAgeRatingCategoryResult extends proto.AgeRatingCategoryResult.$Properties {
    }

    class AgeRatingCategoryResult {
        constructor(properties?: proto.AgeRatingCategoryResult.$Properties);
        $unknowns?: Uint8Array[];
        ageratingcategories: proto.AgeRatingCategory.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingCategoryResult {
        interface $Properties {
            ageratingcategories?: (proto.AgeRatingCategory.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingCategoryResult.$Properties;
    }

    interface IAgeRatingCategory extends proto.AgeRatingCategory.$Properties {
    }

    class AgeRatingCategory {
        constructor(properties?: proto.AgeRatingCategory.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        rating: string;
        organization?: (proto.AgeRatingOrganization.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingCategory {
        interface $Properties {
            id?: (number|null);
            rating?: (string|null);
            organization?: (proto.AgeRatingOrganization.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingCategory.$Properties;
    }

    interface IAgeRatingContentDescriptionResult extends proto.AgeRatingContentDescriptionResult.$Properties {
    }

    class AgeRatingContentDescriptionResult {
        constructor(properties?: proto.AgeRatingContentDescriptionResult.$Properties);
        $unknowns?: Uint8Array[];
        ageratingcontentdescriptions: proto.AgeRatingContentDescription.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescriptionResult {
        interface $Properties {
            ageratingcontentdescriptions?: (proto.AgeRatingContentDescription.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescriptionResult.$Properties;
    }

    interface IAgeRatingContentDescription extends proto.AgeRatingContentDescription.$Properties {
    }

    class AgeRatingContentDescription {
        constructor(properties?: proto.AgeRatingContentDescription.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.AgeRatingContentDescriptionCategoryEnum;
        description: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescription {
        interface $Properties {
            id?: (number|null);
            category?: (proto.AgeRatingContentDescriptionCategoryEnum|null);
            description?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescription.$Properties;
    }

    enum AgeRatingContentDescriptionCategoryEnum {
        AGERATINGCONTENTDESCRIPTION_CATEGORY_NULL = 0,
        ESRB_ALCOHOL_REFERENCE = 1,
        ESRB_ANIMATED_BLOOD = 2,
        ESRB_BLOOD = 3,
        ESRB_BLOOD_AND_GORE = 4,
        ESRB_CARTOON_VIOLENCE = 5,
        ESRB_COMIC_MISCHIEF = 6,
        ESRB_CRUDE_HUMOR = 7,
        ESRB_DRUG_REFERENCE = 8,
        ESRB_FANTASY_VIOLENCE = 9,
        ESRB_INTENSE_VIOLENCE = 10,
        ESRB_LANGUAGE = 11,
        ESRB_LYRICS = 12,
        ESRB_MATURE_HUMOR = 13,
        ESRB_NUDITY = 14,
        ESRB_PARTIAL_NUDITY = 15,
        ESRB_REAL_GAMBLING = 16,
        ESRB_SEXUAL_CONTENT = 17,
        ESRB_SEXUAL_THEMES = 18,
        ESRB_SEXUAL_VIOLENCE = 19,
        ESRB_SIMULATED_GAMBLING = 20,
        ESRB_STRONG_LANGUAGE = 21,
        ESRB_STRONG_LYRICS = 22,
        ESRB_STRONG_SEXUAL_CONTENT = 23,
        ESRB_SUGGESTIVE_THEMES = 24,
        ESRB_TOBACCO_REFERENCE = 25,
        ESRB_USE_OF_ALCOHOL = 26,
        ESRB_USE_OF_DRUGS = 27,
        ESRB_USE_OF_TOBACCO = 28,
        ESRB_VIOLENCE = 29,
        ESRB_VIOLENT_REFERENCES = 30,
        ESRB_ANIMATED_VIOLENCE = 31,
        ESRB_MILD_LANGUAGE = 32,
        ESRB_MILD_VIOLENCE = 33,
        ESRB_USE_OF_DRUGS_AND_ALCOHOL = 34,
        ESRB_DRUG_AND_ALCOHOL_REFERENCE = 35,
        ESRB_MILD_SUGGESTIVE_THEMES = 36,
        ESRB_MILD_CARTOON_VIOLENCE = 37,
        ESRB_MILD_BLOOD = 38,
        ESRB_REALISTIC_BLOOD_AND_GORE = 39,
        ESRB_REALISTIC_VIOLENCE = 40,
        ESRB_ALCOHOL_AND_TOBACCO_REFERENCE = 41,
        ESRB_MATURE_SEXUAL_THEMES = 42,
        ESRB_MILD_ANIMATED_VIOLENCE = 43,
        ESRB_MILD_SEXUAL_THEMES = 44,
        ESRB_USE_OF_ALCOHOL_AND_TOBACCO = 45,
        ESRB_ANIMATED_BLOOD_AND_GORE = 46,
        ESRB_MILD_FANTASY_VIOLENCE = 47,
        ESRB_MILD_LYRICS = 48,
        ESRB_REALISTIC_BLOOD = 49,
        PEGI_VIOLENCE = 50,
        PEGI_SEX = 51,
        PEGI_DRUGS = 52,
        PEGI_FEAR = 53,
        PEGI_DISCRIMINATION = 54,
        PEGI_BAD_LANGUAGE = 55,
        PEGI_GAMBLING = 56,
        PEGI_ONLINE_GAMEPLAY = 57,
        PEGI_IN_GAME_PURCHASES = 58,
        CERO_LOVE = 59,
        CERO_SEXUAL_CONTENT = 60,
        CERO_VIOLENCE = 61,
        CERO_HORROR = 62,
        CERO_DRINKING_SMOKING = 63,
        CERO_GAMBLING = 64,
        CERO_CRIME = 65,
        CERO_CONTROLLED_SUBSTANCES = 66,
        CERO_LANGUAGES_AND_OTHERS = 67,
        GRAC_SEXUALITY = 68,
        GRAC_VIOLENCE = 69,
        GRAC_FEAR_HORROR_THREATENING = 70,
        GRAC_LANGUAGE = 71,
        GRAC_ALCOHOL_TOBACCO_DRUG = 72,
        GRAC_CRIME_ANTI_SOCIAL = 73,
        GRAC_GAMBLING = 74,
        CLASS_IND_VIOLENCIA = 75,
        CLASS_IND_VIOLENCIA_EXTREMA = 76,
        CLASS_IND_CONTEUDO_SEXUAL = 77,
        CLASS_IND_NUDEZ = 78,
        CLASS_IND_SEXO = 79,
        CLASS_IND_SEXO_EXPLICITO = 80,
        CLASS_IND_DROGAS = 81,
        CLASS_IND_DROGAS_LICITAS = 82,
        CLASS_IND_DROGAS_ILICITAS = 83,
        CLASS_IND_LINGUAGEM_IMPROPRIA = 84,
        CLASS_IND_ATOS_CRIMINOSOS = 85
    }

    interface IAgeRatingContentDescriptionTypeResult extends proto.AgeRatingContentDescriptionTypeResult.$Properties {
    }

    class AgeRatingContentDescriptionTypeResult {
        constructor(properties?: proto.AgeRatingContentDescriptionTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        ageratingcontentdescriptiontypes: proto.AgeRatingContentDescriptionType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescriptionTypeResult {
        interface $Properties {
            ageratingcontentdescriptiontypes?: (proto.AgeRatingContentDescriptionType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescriptionTypeResult.$Properties;
    }

    interface IAgeRatingContentDescriptionType extends proto.AgeRatingContentDescriptionType.$Properties {
    }

    class AgeRatingContentDescriptionType {
        constructor(properties?: proto.AgeRatingContentDescriptionType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        slug: string;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescriptionType {
        interface $Properties {
            id?: (number|null);
            slug?: (string|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescriptionType.$Properties;
    }

    interface IAgeRatingContentDescriptionV2Result extends proto.AgeRatingContentDescriptionV2Result.$Properties {
    }

    class AgeRatingContentDescriptionV2Result {
        constructor(properties?: proto.AgeRatingContentDescriptionV2Result.$Properties);
        $unknowns?: Uint8Array[];
        ageratingcontentdescriptionsv2: proto.AgeRatingContentDescriptionV2.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescriptionV2Result {
        interface $Properties {
            ageratingcontentdescriptionsv2?: (proto.AgeRatingContentDescriptionV2.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescriptionV2Result.$Properties;
    }

    interface IAgeRatingContentDescriptionV2 extends proto.AgeRatingContentDescriptionV2.$Properties {
    }

    class AgeRatingContentDescriptionV2 {
        constructor(properties?: proto.AgeRatingContentDescriptionV2.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        description: string;
        organization?: (proto.AgeRatingOrganization.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        description_type?: (proto.AgeRatingContentDescriptionType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingContentDescriptionV2 {
        interface $Properties {
            id?: (number|null);
            description?: (string|null);
            organization?: (proto.AgeRatingOrganization.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            description_type?: (proto.AgeRatingContentDescriptionType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingContentDescriptionV2.$Properties;
    }

    interface IAgeRatingOrganizationResult extends proto.AgeRatingOrganizationResult.$Properties {
    }

    class AgeRatingOrganizationResult {
        constructor(properties?: proto.AgeRatingOrganizationResult.$Properties);
        $unknowns?: Uint8Array[];
        ageratingorganizations: proto.AgeRatingOrganization.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingOrganizationResult {
        interface $Properties {
            ageratingorganizations?: (proto.AgeRatingOrganization.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingOrganizationResult.$Properties;
    }

    interface IAgeRatingOrganization extends proto.AgeRatingOrganization.$Properties {
    }

    class AgeRatingOrganization {
        constructor(properties?: proto.AgeRatingOrganization.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace AgeRatingOrganization {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AgeRatingOrganization.$Properties;
    }

    interface IAlternativeNameResult extends proto.AlternativeNameResult.$Properties {
    }

    class AlternativeNameResult {
        constructor(properties?: proto.AlternativeNameResult.$Properties);
        $unknowns?: Uint8Array[];
        alternativenames: proto.AlternativeName.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace AlternativeNameResult {
        interface $Properties {
            alternativenames?: (proto.AlternativeName.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AlternativeNameResult.$Properties;
    }

    interface IAlternativeName extends proto.AlternativeName.$Properties {
    }

    class AlternativeName {
        constructor(properties?: proto.AlternativeName.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        comment: string;
        game?: (proto.Game.$Properties|null);
        name: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace AlternativeName {
        interface $Properties {
            id?: (number|null);
            comment?: (string|null);
            game?: (proto.Game.$Properties|null);
            name?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.AlternativeName.$Properties;
    }

    interface IArtworkResult extends proto.ArtworkResult.$Properties {
    }

    class ArtworkResult {
        constructor(properties?: proto.ArtworkResult.$Properties);
        $unknowns?: Uint8Array[];
        artworks: proto.Artwork.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ArtworkResult {
        interface $Properties {
            artworks?: (proto.Artwork.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ArtworkResult.$Properties;
    }

    interface IArtwork extends proto.Artwork.$Properties {
    }

    class Artwork {
        constructor(properties?: proto.Artwork.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        game?: (proto.Game.$Properties|null);
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        artwork_type?: (proto.ArtworkType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Artwork {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            game?: (proto.Game.$Properties|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            artwork_type?: (proto.ArtworkType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Artwork.$Properties;
    }

    interface IArtworkTypeResult extends proto.ArtworkTypeResult.$Properties {
    }

    class ArtworkTypeResult {
        constructor(properties?: proto.ArtworkTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        artworktypes: proto.ArtworkType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ArtworkTypeResult {
        interface $Properties {
            artworktypes?: (proto.ArtworkType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ArtworkTypeResult.$Properties;
    }

    interface IArtworkType extends proto.ArtworkType.$Properties {
    }

    class ArtworkType {
        constructor(properties?: proto.ArtworkType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        slug: string;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ArtworkType {
        interface $Properties {
            id?: (number|null);
            slug?: (string|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ArtworkType.$Properties;
    }

    interface ICharacterResult extends proto.CharacterResult.$Properties {
    }

    class CharacterResult {
        constructor(properties?: proto.CharacterResult.$Properties);
        $unknowns?: Uint8Array[];
        characters: proto.Character.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterResult {
        interface $Properties {
            characters?: (proto.Character.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterResult.$Properties;
    }

    interface ICharacter extends proto.Character.$Properties {
    }

    class Character {
        constructor(properties?: proto.Character.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        akas: string[];
        country_name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        description: string;
        games: proto.Game.$Properties[];
        gender: proto.GenderGenderEnum;
        mug_shot?: (proto.CharacterMugShot.$Properties|null);
        name: string;
        slug: string;
        species: proto.CharacterSpeciesEnum;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        character_gender?: (proto.CharacterGender.$Properties|null);
        character_species?: (proto.CharacterSpecie.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Character {
        interface $Properties {
            id?: (number|null);
            akas?: (string[]|null);
            country_name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            description?: (string|null);
            games?: (proto.Game.$Properties[]|null);
            gender?: (proto.GenderGenderEnum|null);
            mug_shot?: (proto.CharacterMugShot.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            species?: (proto.CharacterSpeciesEnum|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            character_gender?: (proto.CharacterGender.$Properties|null);
            character_species?: (proto.CharacterSpecie.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Character.$Properties;
    }

    enum GenderGenderEnum {
        MALE = 0,
        FEMALE = 1,
        OTHER = 2
    }

    enum CharacterSpeciesEnum {
        CHARACTER_SPECIES_NULL = 0,
        HUMAN = 1,
        ALIEN = 2,
        ANIMAL = 3,
        ANDROID = 4,
        UNKNOWN = 5
    }

    interface ICharacterGenderResult extends proto.CharacterGenderResult.$Properties {
    }

    class CharacterGenderResult {
        constructor(properties?: proto.CharacterGenderResult.$Properties);
        $unknowns?: Uint8Array[];
        charactergenders: proto.CharacterGender.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterGenderResult {
        interface $Properties {
            charactergenders?: (proto.CharacterGender.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterGenderResult.$Properties;
    }

    interface ICharacterGender extends proto.CharacterGender.$Properties {
    }

    class CharacterGender {
        constructor(properties?: proto.CharacterGender.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterGender {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterGender.$Properties;
    }

    interface ICharacterMugShotResult extends proto.CharacterMugShotResult.$Properties {
    }

    class CharacterMugShotResult {
        constructor(properties?: proto.CharacterMugShotResult.$Properties);
        $unknowns?: Uint8Array[];
        charactermugshots: proto.CharacterMugShot.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterMugShotResult {
        interface $Properties {
            charactermugshots?: (proto.CharacterMugShot.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterMugShotResult.$Properties;
    }

    interface ICharacterMugShot extends proto.CharacterMugShot.$Properties {
    }

    class CharacterMugShot {
        constructor(properties?: proto.CharacterMugShot.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterMugShot {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterMugShot.$Properties;
    }

    interface ICharacterSpecieResult extends proto.CharacterSpecieResult.$Properties {
    }

    class CharacterSpecieResult {
        constructor(properties?: proto.CharacterSpecieResult.$Properties);
        $unknowns?: Uint8Array[];
        characterspecies: proto.CharacterSpecie.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterSpecieResult {
        interface $Properties {
            characterspecies?: (proto.CharacterSpecie.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterSpecieResult.$Properties;
    }

    interface ICharacterSpecie extends proto.CharacterSpecie.$Properties {
    }

    class CharacterSpecie {
        constructor(properties?: proto.CharacterSpecie.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CharacterSpecie {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CharacterSpecie.$Properties;
    }

    interface ICollectionResult extends proto.CollectionResult.$Properties {
    }

    class CollectionResult {
        constructor(properties?: proto.CollectionResult.$Properties);
        $unknowns?: Uint8Array[];
        collections: proto.Collection.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionResult {
        interface $Properties {
            collections?: (proto.Collection.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionResult.$Properties;
    }

    interface ICollection extends proto.Collection.$Properties {
    }

    class Collection {
        constructor(properties?: proto.Collection.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        games: proto.Game.$Properties[];
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        type?: (proto.CollectionType.$Properties|null);
        as_parent_relations: proto.CollectionRelation.$Properties[];
        as_child_relations: proto.CollectionRelation.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace Collection {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            games?: (proto.Game.$Properties[]|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            type?: (proto.CollectionType.$Properties|null);
            as_parent_relations?: (proto.CollectionRelation.$Properties[]|null);
            as_child_relations?: (proto.CollectionRelation.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Collection.$Properties;
    }

    interface ICollectionMembershipResult extends proto.CollectionMembershipResult.$Properties {
    }

    class CollectionMembershipResult {
        constructor(properties?: proto.CollectionMembershipResult.$Properties);
        $unknowns?: Uint8Array[];
        collectionmemberships: proto.CollectionMembership.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionMembershipResult {
        interface $Properties {
            collectionmemberships?: (proto.CollectionMembership.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionMembershipResult.$Properties;
    }

    interface ICollectionMembership extends proto.CollectionMembership.$Properties {
    }

    class CollectionMembership {
        constructor(properties?: proto.CollectionMembership.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game?: (proto.Game.$Properties|null);
        collection?: (proto.Collection.$Properties|null);
        type?: (proto.CollectionMembershipType.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionMembership {
        interface $Properties {
            id?: (number|null);
            game?: (proto.Game.$Properties|null);
            collection?: (proto.Collection.$Properties|null);
            type?: (proto.CollectionMembershipType.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionMembership.$Properties;
    }

    interface ICollectionMembershipTypeResult extends proto.CollectionMembershipTypeResult.$Properties {
    }

    class CollectionMembershipTypeResult {
        constructor(properties?: proto.CollectionMembershipTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        collectionmembershiptypes: proto.CollectionMembershipType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionMembershipTypeResult {
        interface $Properties {
            collectionmembershiptypes?: (proto.CollectionMembershipType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionMembershipTypeResult.$Properties;
    }

    interface ICollectionMembershipType extends proto.CollectionMembershipType.$Properties {
    }

    class CollectionMembershipType {
        constructor(properties?: proto.CollectionMembershipType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        allowed_collection_type?: (proto.CollectionType.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionMembershipType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            allowed_collection_type?: (proto.CollectionType.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionMembershipType.$Properties;
    }

    interface ICollectionRelationResult extends proto.CollectionRelationResult.$Properties {
    }

    class CollectionRelationResult {
        constructor(properties?: proto.CollectionRelationResult.$Properties);
        $unknowns?: Uint8Array[];
        collectionrelations: proto.CollectionRelation.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionRelationResult {
        interface $Properties {
            collectionrelations?: (proto.CollectionRelation.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionRelationResult.$Properties;
    }

    interface ICollectionRelation extends proto.CollectionRelation.$Properties {
    }

    class CollectionRelation {
        constructor(properties?: proto.CollectionRelation.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        child_collection?: (proto.Collection.$Properties|null);
        parent_collection?: (proto.Collection.$Properties|null);
        type?: (proto.CollectionRelationType.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionRelation {
        interface $Properties {
            id?: (number|null);
            child_collection?: (proto.Collection.$Properties|null);
            parent_collection?: (proto.Collection.$Properties|null);
            type?: (proto.CollectionRelationType.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionRelation.$Properties;
    }

    interface ICollectionRelationTypeResult extends proto.CollectionRelationTypeResult.$Properties {
    }

    class CollectionRelationTypeResult {
        constructor(properties?: proto.CollectionRelationTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        collectionrelationtypes: proto.CollectionRelationType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionRelationTypeResult {
        interface $Properties {
            collectionrelationtypes?: (proto.CollectionRelationType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionRelationTypeResult.$Properties;
    }

    interface ICollectionRelationType extends proto.CollectionRelationType.$Properties {
    }

    class CollectionRelationType {
        constructor(properties?: proto.CollectionRelationType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        allowed_child_type?: (proto.CollectionType.$Properties|null);
        allowed_parent_type?: (proto.CollectionType.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionRelationType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            allowed_child_type?: (proto.CollectionType.$Properties|null);
            allowed_parent_type?: (proto.CollectionType.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionRelationType.$Properties;
    }

    interface ICollectionTypeResult extends proto.CollectionTypeResult.$Properties {
    }

    class CollectionTypeResult {
        constructor(properties?: proto.CollectionTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        collectiontypes: proto.CollectionType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionTypeResult {
        interface $Properties {
            collectiontypes?: (proto.CollectionType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionTypeResult.$Properties;
    }

    interface ICollectionType extends proto.CollectionType.$Properties {
    }

    class CollectionType {
        constructor(properties?: proto.CollectionType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CollectionType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CollectionType.$Properties;
    }

    interface ICompanyResult extends proto.CompanyResult.$Properties {
    }

    class CompanyResult {
        constructor(properties?: proto.CompanyResult.$Properties);
        $unknowns?: Uint8Array[];
        companies: proto.Company.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyResult {
        interface $Properties {
            companies?: (proto.Company.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyResult.$Properties;
    }

    interface ICompany extends proto.Company.$Properties {
    }

    class Company {
        constructor(properties?: proto.Company.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        change_date?: (google.protobuf.Timestamp.$Properties|null);
        change_date_category: proto.DateFormatChangeDateCategoryEnum;
        changed_company_id?: (proto.Company.$Properties|null);
        country: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        description: string;
        developed: proto.Game.$Properties[];
        logo?: (proto.CompanyLogo.$Properties|null);
        name: string;
        parent?: (proto.Company.$Properties|null);
        published: proto.Game.$Properties[];
        slug: string;
        start_date?: (google.protobuf.Timestamp.$Properties|null);
        start_date_category: proto.DateFormatChangeDateCategoryEnum;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        websites: proto.CompanyWebsite.$Properties[];
        checksum: string;
        status?: (proto.CompanyStatus.$Properties|null);
        start_date_format?: (proto.DateFormat.$Properties|null);
        change_date_format?: (proto.DateFormat.$Properties|null);
        company_size?: (proto.CompanySize.$Properties|null);
        company_type_histories: proto.CompanyTypeHistory.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace Company {
        interface $Properties {
            id?: (number|null);
            change_date?: (google.protobuf.Timestamp.$Properties|null);
            change_date_category?: (proto.DateFormatChangeDateCategoryEnum|null);
            changed_company_id?: (proto.Company.$Properties|null);
            country?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            description?: (string|null);
            developed?: (proto.Game.$Properties[]|null);
            logo?: (proto.CompanyLogo.$Properties|null);
            name?: (string|null);
            parent?: (proto.Company.$Properties|null);
            published?: (proto.Game.$Properties[]|null);
            slug?: (string|null);
            start_date?: (google.protobuf.Timestamp.$Properties|null);
            start_date_category?: (proto.DateFormatChangeDateCategoryEnum|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            websites?: (proto.CompanyWebsite.$Properties[]|null);
            checksum?: (string|null);
            status?: (proto.CompanyStatus.$Properties|null);
            start_date_format?: (proto.DateFormat.$Properties|null);
            change_date_format?: (proto.DateFormat.$Properties|null);
            company_size?: (proto.CompanySize.$Properties|null);
            company_type_histories?: (proto.CompanyTypeHistory.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Company.$Properties;
    }

    enum DateFormatChangeDateCategoryEnum {
        YYYYMMMMDD = 0,
        YYYYMMMM = 1,
        YYYY = 2,
        YYYYQ1 = 3,
        YYYYQ2 = 4,
        YYYYQ3 = 5,
        YYYYQ4 = 6,
        TBD = 7
    }

    interface ICompanyLogoResult extends proto.CompanyLogoResult.$Properties {
    }

    class CompanyLogoResult {
        constructor(properties?: proto.CompanyLogoResult.$Properties);
        $unknowns?: Uint8Array[];
        companylogos: proto.CompanyLogo.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyLogoResult {
        interface $Properties {
            companylogos?: (proto.CompanyLogo.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyLogoResult.$Properties;
    }

    interface ICompanyLogo extends proto.CompanyLogo.$Properties {
    }

    class CompanyLogo {
        constructor(properties?: proto.CompanyLogo.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyLogo {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyLogo.$Properties;
    }

    interface ICompanySizeResult extends proto.CompanySizeResult.$Properties {
    }

    class CompanySizeResult {
        constructor(properties?: proto.CompanySizeResult.$Properties);
        $unknowns?: Uint8Array[];
        companysizes: proto.CompanySize.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanySizeResult {
        interface $Properties {
            companysizes?: (proto.CompanySize.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanySizeResult.$Properties;
    }

    interface ICompanySize extends proto.CompanySize.$Properties {
    }

    class CompanySize {
        constructor(properties?: proto.CompanySize.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanySize {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanySize.$Properties;
    }

    interface ICompanyStatusResult extends proto.CompanyStatusResult.$Properties {
    }

    class CompanyStatusResult {
        constructor(properties?: proto.CompanyStatusResult.$Properties);
        $unknowns?: Uint8Array[];
        companystatuses: proto.CompanyStatus.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyStatusResult {
        interface $Properties {
            companystatuses?: (proto.CompanyStatus.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyStatusResult.$Properties;
    }

    interface ICompanyStatus extends proto.CompanyStatus.$Properties {
    }

    class CompanyStatus {
        constructor(properties?: proto.CompanyStatus.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyStatus {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyStatus.$Properties;
    }

    interface ICompanyTypeResult extends proto.CompanyTypeResult.$Properties {
    }

    class CompanyTypeResult {
        constructor(properties?: proto.CompanyTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        companytypes: proto.CompanyType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyTypeResult {
        interface $Properties {
            companytypes?: (proto.CompanyType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyTypeResult.$Properties;
    }

    interface ICompanyType extends proto.CompanyType.$Properties {
    }

    class CompanyType {
        constructor(properties?: proto.CompanyType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyType.$Properties;
    }

    interface ICompanyTypeHistoryResult extends proto.CompanyTypeHistoryResult.$Properties {
    }

    class CompanyTypeHistoryResult {
        constructor(properties?: proto.CompanyTypeHistoryResult.$Properties);
        $unknowns?: Uint8Array[];
        companytypehistories: proto.CompanyTypeHistory.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyTypeHistoryResult {
        interface $Properties {
            companytypehistories?: (proto.CompanyTypeHistory.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyTypeHistoryResult.$Properties;
    }

    interface ICompanyTypeHistory extends proto.CompanyTypeHistory.$Properties {
    }

    class CompanyTypeHistory {
        constructor(properties?: proto.CompanyTypeHistory.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        company?: (proto.Company.$Properties|null);
        company_type?: (proto.CompanyType.$Properties|null);
        parent_company?: (proto.Company.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyTypeHistory {
        interface $Properties {
            id?: (number|null);
            company?: (proto.Company.$Properties|null);
            company_type?: (proto.CompanyType.$Properties|null);
            parent_company?: (proto.Company.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyTypeHistory.$Properties;
    }

    interface ICompanyWebsiteResult extends proto.CompanyWebsiteResult.$Properties {
    }

    class CompanyWebsiteResult {
        constructor(properties?: proto.CompanyWebsiteResult.$Properties);
        $unknowns?: Uint8Array[];
        companywebsites: proto.CompanyWebsite.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyWebsiteResult {
        interface $Properties {
            companywebsites?: (proto.CompanyWebsite.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyWebsiteResult.$Properties;
    }

    interface ICompanyWebsite extends proto.CompanyWebsite.$Properties {
    }

    class CompanyWebsite {
        constructor(properties?: proto.CompanyWebsite.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.WebsiteCategoryEnum;
        trusted: boolean;
        url: string;
        checksum: string;
        type?: (proto.WebsiteType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace CompanyWebsite {
        interface $Properties {
            id?: (number|null);
            category?: (proto.WebsiteCategoryEnum|null);
            trusted?: (boolean|null);
            url?: (string|null);
            checksum?: (string|null);
            type?: (proto.WebsiteType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CompanyWebsite.$Properties;
    }

    enum WebsiteCategoryEnum {
        WEBSITE_CATEGORY_NULL = 0,
        WEBSITE_OFFICIAL = 1,
        WEBSITE_WIKIA = 2,
        WEBSITE_WIKIPEDIA = 3,
        WEBSITE_FACEBOOK = 4,
        WEBSITE_TWITTER = 5,
        WEBSITE_TWITCH = 6,
        WEBSITE_INSTAGRAM = 8,
        WEBSITE_YOUTUBE = 9,
        WEBSITE_IPHONE = 10,
        WEBSITE_IPAD = 11,
        WEBSITE_ANDROID = 12,
        WEBSITE_STEAM = 13,
        WEBSITE_REDDIT = 14,
        WEBSITE_ITCH = 15,
        WEBSITE_EPICGAMES = 16,
        WEBSITE_GOG = 17,
        WEBSITE_DISCORD = 18,
        WEBSITE_BLUESKY = 19
    }

    interface IContentSafetyRatingResult extends proto.ContentSafetyRatingResult.$Properties {
    }

    class ContentSafetyRatingResult {
        constructor(properties?: proto.ContentSafetyRatingResult.$Properties);
        $unknowns?: Uint8Array[];
        contentsafetyratings: proto.ContentSafetyRating.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSafetyRatingResult {
        interface $Properties {
            contentsafetyratings?: (proto.ContentSafetyRating.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ContentSafetyRatingResult.$Properties;
    }

    interface IContentSafetyRating extends proto.ContentSafetyRating.$Properties {
    }

    class ContentSafetyRating {
        constructor(properties?: proto.ContentSafetyRating.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSafetyRating {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ContentSafetyRating.$Properties;
    }

    interface IContentSafetyRatingDimensionResult extends proto.ContentSafetyRatingDimensionResult.$Properties {
    }

    class ContentSafetyRatingDimensionResult {
        constructor(properties?: proto.ContentSafetyRatingDimensionResult.$Properties);
        $unknowns?: Uint8Array[];
        contentsafetyratingdimensions: proto.ContentSafetyRatingDimension.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSafetyRatingDimensionResult {
        interface $Properties {
            contentsafetyratingdimensions?: (proto.ContentSafetyRatingDimension.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ContentSafetyRatingDimensionResult.$Properties;
    }

    interface IContentSafetyRatingDimension extends proto.ContentSafetyRatingDimension.$Properties {
    }

    class ContentSafetyRatingDimension {
        constructor(properties?: proto.ContentSafetyRatingDimension.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        content_safety_rating?: (proto.ContentSafetyRating.$Properties|null);
        value: number;
        description: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSafetyRatingDimension {
        interface $Properties {
            id?: (number|null);
            content_safety_rating?: (proto.ContentSafetyRating.$Properties|null);
            value?: (number|null);
            description?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ContentSafetyRatingDimension.$Properties;
    }

    interface ICoverResult extends proto.CoverResult.$Properties {
    }

    class CoverResult {
        constructor(properties?: proto.CoverResult.$Properties);
        $unknowns?: Uint8Array[];
        covers: proto.Cover.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace CoverResult {
        interface $Properties {
            covers?: (proto.Cover.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.CoverResult.$Properties;
    }

    interface ICover extends proto.Cover.$Properties {
    }

    class Cover {
        constructor(properties?: proto.Cover.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        game?: (proto.Game.$Properties|null);
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        game_localization?: (proto.GameLocalization.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Cover {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            game?: (proto.Game.$Properties|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            game_localization?: (proto.GameLocalization.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Cover.$Properties;
    }

    interface IDateFormatResult extends proto.DateFormatResult.$Properties {
    }

    class DateFormatResult {
        constructor(properties?: proto.DateFormatResult.$Properties);
        $unknowns?: Uint8Array[];
        dateformats: proto.DateFormat.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace DateFormatResult {
        interface $Properties {
            dateformats?: (proto.DateFormat.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.DateFormatResult.$Properties;
    }

    interface IDateFormat extends proto.DateFormat.$Properties {
    }

    class DateFormat {
        constructor(properties?: proto.DateFormat.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        format: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace DateFormat {
        interface $Properties {
            id?: (number|null);
            format?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.DateFormat.$Properties;
    }

    interface IEntityTypeResult extends proto.EntityTypeResult.$Properties {
    }

    class EntityTypeResult {
        constructor(properties?: proto.EntityTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        entitytypes: proto.EntityType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace EntityTypeResult {
        interface $Properties {
            entitytypes?: (proto.EntityType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EntityTypeResult.$Properties;
    }

    interface IEntityType extends proto.EntityType.$Properties {
    }

    class EntityType {
        constructor(properties?: proto.EntityType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace EntityType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EntityType.$Properties;
    }

    interface IEventResult extends proto.EventResult.$Properties {
    }

    class EventResult {
        constructor(properties?: proto.EventResult.$Properties);
        $unknowns?: Uint8Array[];
        events: proto.Event.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventResult {
        interface $Properties {
            events?: (proto.Event.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EventResult.$Properties;
    }

    interface IEvent extends proto.Event.$Properties {
    }

    class Event {
        constructor(properties?: proto.Event.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        slug: string;
        event_logo?: (proto.EventLogo.$Properties|null);
        start_time?: (google.protobuf.Timestamp.$Properties|null);
        time_zone: string;
        end_time?: (google.protobuf.Timestamp.$Properties|null);
        live_stream_url: string;
        games: proto.Game.$Properties[];
        videos: proto.GameVideo.$Properties[];
        event_networks: proto.EventNetwork.$Properties[];
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Event {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            slug?: (string|null);
            event_logo?: (proto.EventLogo.$Properties|null);
            start_time?: (google.protobuf.Timestamp.$Properties|null);
            time_zone?: (string|null);
            end_time?: (google.protobuf.Timestamp.$Properties|null);
            live_stream_url?: (string|null);
            games?: (proto.Game.$Properties[]|null);
            videos?: (proto.GameVideo.$Properties[]|null);
            event_networks?: (proto.EventNetwork.$Properties[]|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Event.$Properties;
    }

    interface IEventLogoResult extends proto.EventLogoResult.$Properties {
    }

    class EventLogoResult {
        constructor(properties?: proto.EventLogoResult.$Properties);
        $unknowns?: Uint8Array[];
        eventlogos: proto.EventLogo.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventLogoResult {
        interface $Properties {
            eventlogos?: (proto.EventLogo.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EventLogoResult.$Properties;
    }

    interface IEventLogo extends proto.EventLogo.$Properties {
    }

    class EventLogo {
        constructor(properties?: proto.EventLogo.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        event?: (proto.Event.$Properties|null);
        alpha_channel: boolean;
        animated: boolean;
        height: number;
        image_id: string;
        url: string;
        width: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventLogo {
        interface $Properties {
            id?: (number|null);
            event?: (proto.Event.$Properties|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EventLogo.$Properties;
    }

    interface IEventNetworkResult extends proto.EventNetworkResult.$Properties {
    }

    class EventNetworkResult {
        constructor(properties?: proto.EventNetworkResult.$Properties);
        $unknowns?: Uint8Array[];
        eventnetworks: proto.EventNetwork.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventNetworkResult {
        interface $Properties {
            eventnetworks?: (proto.EventNetwork.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EventNetworkResult.$Properties;
    }

    interface IEventNetwork extends proto.EventNetwork.$Properties {
    }

    class EventNetwork {
        constructor(properties?: proto.EventNetwork.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        event?: (proto.Event.$Properties|null);
        url: string;
        network_type?: (proto.NetworkType.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace EventNetwork {
        interface $Properties {
            id?: (number|null);
            event?: (proto.Event.$Properties|null);
            url?: (string|null);
            network_type?: (proto.NetworkType.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.EventNetwork.$Properties;
    }

    interface IExternalGameResult extends proto.ExternalGameResult.$Properties {
    }

    class ExternalGameResult {
        constructor(properties?: proto.ExternalGameResult.$Properties);
        $unknowns?: Uint8Array[];
        externalgames: proto.ExternalGame.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExternalGameResult {
        interface $Properties {
            externalgames?: (proto.ExternalGame.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ExternalGameResult.$Properties;
    }

    interface IExternalGame extends proto.ExternalGame.$Properties {
    }

    class ExternalGame {
        constructor(properties?: proto.ExternalGame.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.ExternalGameCategoryEnum;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        game?: (proto.Game.$Properties|null);
        name: string;
        uid: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        year: number;
        media: proto.ExternalGameMediaEnum;
        platform?: (proto.Platform.$Properties|null);
        countries: number[];
        checksum: string;
        external_game_source?: (proto.ExternalGameSource.$Properties|null);
        game_release_format?: (proto.GameReleaseFormat.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExternalGame {
        interface $Properties {
            id?: (number|null);
            category?: (proto.ExternalGameCategoryEnum|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            game?: (proto.Game.$Properties|null);
            name?: (string|null);
            uid?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            year?: (number|null);
            media?: (proto.ExternalGameMediaEnum|null);
            platform?: (proto.Platform.$Properties|null);
            countries?: (number[]|null);
            checksum?: (string|null);
            external_game_source?: (proto.ExternalGameSource.$Properties|null);
            game_release_format?: (proto.GameReleaseFormat.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ExternalGame.$Properties;
    }

    enum ExternalGameCategoryEnum {
        EXTERNALGAME_CATEGORY_NULL = 0,
        EXTERNALGAME_STEAM = 1,
        EXTERNALGAME_GOG = 5,
        EXTERNALGAME_YOUTUBE = 10,
        EXTERNALGAME_MICROSOFT = 11,
        EXTERNALGAME_APPLE = 13,
        EXTERNALGAME_TWITCH = 14,
        EXTERNALGAME_ANDROID = 15,
        EXTERNALGAME_AMAZON_ASIN = 20,
        EXTERNALGAME_AMAZON_LUNA = 22,
        EXTERNALGAME_AMAZON_ADG = 23,
        EXTERNALGAME_EPIC_GAME_STORE = 26,
        EXTERNALGAME_OCULUS = 28,
        EXTERNALGAME_UTOMIK = 29,
        EXTERNALGAME_ITCH_IO = 30,
        EXTERNALGAME_XBOX_MARKETPLACE = 31,
        EXTERNALGAME_KARTRIDGE = 32,
        EXTERNALGAME_PLAYSTATION_STORE_US = 36,
        EXTERNALGAME_FOCUS_ENTERTAINMENT = 37,
        EXTERNALGAME_XBOX_GAME_PASS_ULTIMATE_CLOUD = 54,
        EXTERNALGAME_GAMEJOLT = 55
    }

    enum ExternalGameMediaEnum {
        EXTERNALGAME_MEDIA_NULL = 0,
        EXTERNALGAME_DIGITAL = 1,
        EXTERNALGAME_PHYSICAL = 2
    }

    interface IExternalGameSourceResult extends proto.ExternalGameSourceResult.$Properties {
    }

    class ExternalGameSourceResult {
        constructor(properties?: proto.ExternalGameSourceResult.$Properties);
        $unknowns?: Uint8Array[];
        externalgamesources: proto.ExternalGameSource.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExternalGameSourceResult {
        interface $Properties {
            externalgamesources?: (proto.ExternalGameSource.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ExternalGameSourceResult.$Properties;
    }

    interface IExternalGameSource extends proto.ExternalGameSource.$Properties {
    }

    class ExternalGameSource {
        constructor(properties?: proto.ExternalGameSource.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExternalGameSource {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ExternalGameSource.$Properties;
    }

    interface IFranchiseResult extends proto.FranchiseResult.$Properties {
    }

    class FranchiseResult {
        constructor(properties?: proto.FranchiseResult.$Properties);
        $unknowns?: Uint8Array[];
        franchises: proto.Franchise.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace FranchiseResult {
        interface $Properties {
            franchises?: (proto.Franchise.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.FranchiseResult.$Properties;
    }

    interface IFranchise extends proto.Franchise.$Properties {
    }

    class Franchise {
        constructor(properties?: proto.Franchise.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        games: proto.Game.$Properties[];
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Franchise {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            games?: (proto.Game.$Properties[]|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Franchise.$Properties;
    }

    interface IGameResult extends proto.GameResult.$Properties {
    }

    class GameResult {
        constructor(properties?: proto.GameResult.$Properties);
        $unknowns?: Uint8Array[];
        games: proto.Game.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameResult {
        interface $Properties {
            games?: (proto.Game.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameResult.$Properties;
    }

    interface IGame extends proto.Game.$Properties {
    }

    class Game {
        constructor(properties?: proto.Game.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        age_ratings: proto.AgeRating.$Properties[];
        aggregated_rating: number;
        aggregated_rating_count: number;
        alternative_names: proto.AlternativeName.$Properties[];
        artworks: proto.Artwork.$Properties[];
        bundles: proto.Game.$Properties[];
        category: proto.GameCategoryEnum;
        collection?: (proto.Collection.$Properties|null);
        cover?: (proto.Cover.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        dlcs: proto.Game.$Properties[];
        expansions: proto.Game.$Properties[];
        external_games: proto.ExternalGame.$Properties[];
        first_release_date?: (google.protobuf.Timestamp.$Properties|null);
        follows: number;
        franchise?: (proto.Franchise.$Properties|null);
        franchises: proto.Franchise.$Properties[];
        game_engines: proto.GameEngine.$Properties[];
        game_modes: proto.GameMode.$Properties[];
        genres: proto.Genre.$Properties[];
        hypes: number;
        involved_companies: proto.InvolvedCompany.$Properties[];
        keywords: proto.Keyword.$Properties[];
        multiplayer_modes: proto.MultiplayerMode.$Properties[];
        name: string;
        parent_game?: (proto.Game.$Properties|null);
        platforms: proto.Platform.$Properties[];
        player_perspectives: proto.PlayerPerspective.$Properties[];
        rating: number;
        rating_count: number;
        release_dates: proto.ReleaseDate.$Properties[];
        screenshots: proto.Screenshot.$Properties[];
        similar_games: proto.Game.$Properties[];
        slug: string;
        standalone_expansions: proto.Game.$Properties[];
        status: proto.GameStatusEnum;
        storyline: string;
        summary: string;
        tags: number[];
        themes: proto.Theme.$Properties[];
        total_rating: number;
        total_rating_count: number;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        version_parent?: (proto.Game.$Properties|null);
        version_title: string;
        videos: proto.GameVideo.$Properties[];
        websites: proto.Website.$Properties[];
        checksum: string;
        remakes: proto.Game.$Properties[];
        remasters: proto.Game.$Properties[];
        expanded_games: proto.Game.$Properties[];
        ports: proto.Game.$Properties[];
        forks: proto.Game.$Properties[];
        language_supports: proto.LanguageSupport.$Properties[];
        game_localizations: proto.GameLocalization.$Properties[];
        collections: proto.Collection.$Properties[];
        game_status?: (proto.GameStatus.$Properties|null);
        game_type?: (proto.GameType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Game {
        interface $Properties {
            id?: (number|null);
            age_ratings?: (proto.AgeRating.$Properties[]|null);
            aggregated_rating?: (number|null);
            aggregated_rating_count?: (number|null);
            alternative_names?: (proto.AlternativeName.$Properties[]|null);
            artworks?: (proto.Artwork.$Properties[]|null);
            bundles?: (proto.Game.$Properties[]|null);
            category?: (proto.GameCategoryEnum|null);
            collection?: (proto.Collection.$Properties|null);
            cover?: (proto.Cover.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            dlcs?: (proto.Game.$Properties[]|null);
            expansions?: (proto.Game.$Properties[]|null);
            external_games?: (proto.ExternalGame.$Properties[]|null);
            first_release_date?: (google.protobuf.Timestamp.$Properties|null);
            follows?: (number|null);
            franchise?: (proto.Franchise.$Properties|null);
            franchises?: (proto.Franchise.$Properties[]|null);
            game_engines?: (proto.GameEngine.$Properties[]|null);
            game_modes?: (proto.GameMode.$Properties[]|null);
            genres?: (proto.Genre.$Properties[]|null);
            hypes?: (number|null);
            involved_companies?: (proto.InvolvedCompany.$Properties[]|null);
            keywords?: (proto.Keyword.$Properties[]|null);
            multiplayer_modes?: (proto.MultiplayerMode.$Properties[]|null);
            name?: (string|null);
            parent_game?: (proto.Game.$Properties|null);
            platforms?: (proto.Platform.$Properties[]|null);
            player_perspectives?: (proto.PlayerPerspective.$Properties[]|null);
            rating?: (number|null);
            rating_count?: (number|null);
            release_dates?: (proto.ReleaseDate.$Properties[]|null);
            screenshots?: (proto.Screenshot.$Properties[]|null);
            similar_games?: (proto.Game.$Properties[]|null);
            slug?: (string|null);
            standalone_expansions?: (proto.Game.$Properties[]|null);
            status?: (proto.GameStatusEnum|null);
            storyline?: (string|null);
            summary?: (string|null);
            tags?: (number[]|null);
            themes?: (proto.Theme.$Properties[]|null);
            total_rating?: (number|null);
            total_rating_count?: (number|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            version_parent?: (proto.Game.$Properties|null);
            version_title?: (string|null);
            videos?: (proto.GameVideo.$Properties[]|null);
            websites?: (proto.Website.$Properties[]|null);
            checksum?: (string|null);
            remakes?: (proto.Game.$Properties[]|null);
            remasters?: (proto.Game.$Properties[]|null);
            expanded_games?: (proto.Game.$Properties[]|null);
            ports?: (proto.Game.$Properties[]|null);
            forks?: (proto.Game.$Properties[]|null);
            language_supports?: (proto.LanguageSupport.$Properties[]|null);
            game_localizations?: (proto.GameLocalization.$Properties[]|null);
            collections?: (proto.Collection.$Properties[]|null);
            game_status?: (proto.GameStatus.$Properties|null);
            game_type?: (proto.GameType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Game.$Properties;
    }

    enum GameCategoryEnum {
        MAIN_GAME = 0,
        DLC_ADDON = 1,
        EXPANSION = 2,
        BUNDLE = 3,
        STANDALONE_EXPANSION = 4,
        MOD = 5,
        EPISODE = 6,
        SEASON = 7,
        REMAKE = 8,
        REMASTER = 9,
        EXPANDED_GAME = 10,
        PORT = 11,
        FORK = 12,
        PACK = 13,
        UPDATE = 14
    }

    enum GameStatusEnum {
        RELEASED = 0,
        ALPHA = 2,
        BETA = 3,
        EARLY_ACCESS = 4,
        OFFLINE = 5,
        CANCELLED = 6,
        RUMORED = 7,
        DELISTED = 8
    }

    interface IGameContentSafetyRatingResult extends proto.GameContentSafetyRatingResult.$Properties {
    }

    class GameContentSafetyRatingResult {
        constructor(properties?: proto.GameContentSafetyRatingResult.$Properties);
        $unknowns?: Uint8Array[];
        gamecontentsafetyratings: proto.GameContentSafetyRating.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameContentSafetyRatingResult {
        interface $Properties {
            gamecontentsafetyratings?: (proto.GameContentSafetyRating.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameContentSafetyRatingResult.$Properties;
    }

    interface IGameContentSafetyRating extends proto.GameContentSafetyRating.$Properties {
    }

    class GameContentSafetyRating {
        constructor(properties?: proto.GameContentSafetyRating.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game?: (proto.Game.$Properties|null);
        content_safety_rating_dimension?: (proto.ContentSafetyRatingDimension.$Properties|null);
        content_safety_rating?: (proto.ContentSafetyRating.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameContentSafetyRating {
        interface $Properties {
            id?: (number|null);
            game?: (proto.Game.$Properties|null);
            content_safety_rating_dimension?: (proto.ContentSafetyRatingDimension.$Properties|null);
            content_safety_rating?: (proto.ContentSafetyRating.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameContentSafetyRating.$Properties;
    }

    interface IGameEngineResult extends proto.GameEngineResult.$Properties {
    }

    class GameEngineResult {
        constructor(properties?: proto.GameEngineResult.$Properties);
        $unknowns?: Uint8Array[];
        gameengines: proto.GameEngine.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameEngineResult {
        interface $Properties {
            gameengines?: (proto.GameEngine.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameEngineResult.$Properties;
    }

    interface IGameEngine extends proto.GameEngine.$Properties {
    }

    class GameEngine {
        constructor(properties?: proto.GameEngine.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        companies: proto.Company.$Properties[];
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        description: string;
        logo?: (proto.GameEngineLogo.$Properties|null);
        name: string;
        platforms: proto.Platform.$Properties[];
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameEngine {
        interface $Properties {
            id?: (number|null);
            companies?: (proto.Company.$Properties[]|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            description?: (string|null);
            logo?: (proto.GameEngineLogo.$Properties|null);
            name?: (string|null);
            platforms?: (proto.Platform.$Properties[]|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameEngine.$Properties;
    }

    interface IGameEngineLogoResult extends proto.GameEngineLogoResult.$Properties {
    }

    class GameEngineLogoResult {
        constructor(properties?: proto.GameEngineLogoResult.$Properties);
        $unknowns?: Uint8Array[];
        gameenginelogos: proto.GameEngineLogo.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameEngineLogoResult {
        interface $Properties {
            gameenginelogos?: (proto.GameEngineLogo.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameEngineLogoResult.$Properties;
    }

    interface IGameEngineLogo extends proto.GameEngineLogo.$Properties {
    }

    class GameEngineLogo {
        constructor(properties?: proto.GameEngineLogo.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameEngineLogo {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameEngineLogo.$Properties;
    }

    interface IGameLocalizationResult extends proto.GameLocalizationResult.$Properties {
    }

    class GameLocalizationResult {
        constructor(properties?: proto.GameLocalizationResult.$Properties);
        $unknowns?: Uint8Array[];
        gamelocalizations: proto.GameLocalization.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameLocalizationResult {
        interface $Properties {
            gamelocalizations?: (proto.GameLocalization.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameLocalizationResult.$Properties;
    }

    interface IGameLocalization extends proto.GameLocalization.$Properties {
    }

    class GameLocalization {
        constructor(properties?: proto.GameLocalization.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        cover?: (proto.Cover.$Properties|null);
        game?: (proto.Game.$Properties|null);
        region?: (proto.Region.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameLocalization {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            cover?: (proto.Cover.$Properties|null);
            game?: (proto.Game.$Properties|null);
            region?: (proto.Region.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameLocalization.$Properties;
    }

    interface IGameModeResult extends proto.GameModeResult.$Properties {
    }

    class GameModeResult {
        constructor(properties?: proto.GameModeResult.$Properties);
        $unknowns?: Uint8Array[];
        gamemodes: proto.GameMode.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameModeResult {
        interface $Properties {
            gamemodes?: (proto.GameMode.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameModeResult.$Properties;
    }

    interface IGameMode extends proto.GameMode.$Properties {
    }

    class GameMode {
        constructor(properties?: proto.GameMode.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameMode {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameMode.$Properties;
    }

    interface IGameReleaseFormatResult extends proto.GameReleaseFormatResult.$Properties {
    }

    class GameReleaseFormatResult {
        constructor(properties?: proto.GameReleaseFormatResult.$Properties);
        $unknowns?: Uint8Array[];
        gamereleaseformats: proto.GameReleaseFormat.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameReleaseFormatResult {
        interface $Properties {
            gamereleaseformats?: (proto.GameReleaseFormat.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameReleaseFormatResult.$Properties;
    }

    interface IGameReleaseFormat extends proto.GameReleaseFormat.$Properties {
    }

    class GameReleaseFormat {
        constructor(properties?: proto.GameReleaseFormat.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        format: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameReleaseFormat {
        interface $Properties {
            id?: (number|null);
            format?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameReleaseFormat.$Properties;
    }

    interface IGameStatusResult extends proto.GameStatusResult.$Properties {
    }

    class GameStatusResult {
        constructor(properties?: proto.GameStatusResult.$Properties);
        $unknowns?: Uint8Array[];
        gamestatuses: proto.GameStatus.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameStatusResult {
        interface $Properties {
            gamestatuses?: (proto.GameStatus.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameStatusResult.$Properties;
    }

    interface IGameStatus extends proto.GameStatus.$Properties {
    }

    class GameStatus {
        constructor(properties?: proto.GameStatus.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        status: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameStatus {
        interface $Properties {
            id?: (number|null);
            status?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameStatus.$Properties;
    }

    interface IGameTimeToBeatResult extends proto.GameTimeToBeatResult.$Properties {
    }

    class GameTimeToBeatResult {
        constructor(properties?: proto.GameTimeToBeatResult.$Properties);
        $unknowns?: Uint8Array[];
        gametimetobeats: proto.GameTimeToBeat.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameTimeToBeatResult {
        interface $Properties {
            gametimetobeats?: (proto.GameTimeToBeat.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameTimeToBeatResult.$Properties;
    }

    interface IGameTimeToBeat extends proto.GameTimeToBeat.$Properties {
    }

    class GameTimeToBeat {
        constructor(properties?: proto.GameTimeToBeat.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game_id: number;
        hastily: number;
        normally: number;
        completely: number;
        count: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameTimeToBeat {
        interface $Properties {
            id?: (number|null);
            game_id?: (number|null);
            hastily?: (number|null);
            normally?: (number|null);
            completely?: (number|null);
            count?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameTimeToBeat.$Properties;
    }

    interface IGameTypeResult extends proto.GameTypeResult.$Properties {
    }

    class GameTypeResult {
        constructor(properties?: proto.GameTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        gametypes: proto.GameType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameTypeResult {
        interface $Properties {
            gametypes?: (proto.GameType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameTypeResult.$Properties;
    }

    interface IGameType extends proto.GameType.$Properties {
    }

    class GameType {
        constructor(properties?: proto.GameType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        type: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameType {
        interface $Properties {
            id?: (number|null);
            type?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameType.$Properties;
    }

    interface IGameVersionResult extends proto.GameVersionResult.$Properties {
    }

    class GameVersionResult {
        constructor(properties?: proto.GameVersionResult.$Properties);
        $unknowns?: Uint8Array[];
        gameversions: proto.GameVersion.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersionResult {
        interface $Properties {
            gameversions?: (proto.GameVersion.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersionResult.$Properties;
    }

    interface IGameVersion extends proto.GameVersion.$Properties {
    }

    class GameVersion {
        constructor(properties?: proto.GameVersion.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        features: proto.GameVersionFeature.$Properties[];
        game?: (proto.Game.$Properties|null);
        games: proto.Game.$Properties[];
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersion {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            features?: (proto.GameVersionFeature.$Properties[]|null);
            game?: (proto.Game.$Properties|null);
            games?: (proto.Game.$Properties[]|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersion.$Properties;
    }

    interface IGameVersionFeatureResult extends proto.GameVersionFeatureResult.$Properties {
    }

    class GameVersionFeatureResult {
        constructor(properties?: proto.GameVersionFeatureResult.$Properties);
        $unknowns?: Uint8Array[];
        gameversionfeatures: proto.GameVersionFeature.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersionFeatureResult {
        interface $Properties {
            gameversionfeatures?: (proto.GameVersionFeature.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersionFeatureResult.$Properties;
    }

    interface IGameVersionFeature extends proto.GameVersionFeature.$Properties {
    }

    class GameVersionFeature {
        constructor(properties?: proto.GameVersionFeature.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.GameVersionFeatureCategoryEnum;
        description: string;
        position: number;
        title: string;
        values: proto.GameVersionFeatureValue.$Properties[];
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersionFeature {
        interface $Properties {
            id?: (number|null);
            category?: (proto.GameVersionFeatureCategoryEnum|null);
            description?: (string|null);
            position?: (number|null);
            title?: (string|null);
            values?: (proto.GameVersionFeatureValue.$Properties[]|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersionFeature.$Properties;
    }

    enum GameVersionFeatureCategoryEnum {
        BOOLEAN = 0,
        DESCRIPTION = 1
    }

    interface IGameVersionFeatureValueResult extends proto.GameVersionFeatureValueResult.$Properties {
    }

    class GameVersionFeatureValueResult {
        constructor(properties?: proto.GameVersionFeatureValueResult.$Properties);
        $unknowns?: Uint8Array[];
        gameversionfeaturevalues: proto.GameVersionFeatureValue.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersionFeatureValueResult {
        interface $Properties {
            gameversionfeaturevalues?: (proto.GameVersionFeatureValue.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersionFeatureValueResult.$Properties;
    }

    interface IGameVersionFeatureValue extends proto.GameVersionFeatureValue.$Properties {
    }

    class GameVersionFeatureValue {
        constructor(properties?: proto.GameVersionFeatureValue.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game?: (proto.Game.$Properties|null);
        game_feature?: (proto.GameVersionFeature.$Properties|null);
        included_feature: proto.GameVersionFeatureValueIncludedFeatureEnum;
        note: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVersionFeatureValue {
        interface $Properties {
            id?: (number|null);
            game?: (proto.Game.$Properties|null);
            game_feature?: (proto.GameVersionFeature.$Properties|null);
            included_feature?: (proto.GameVersionFeatureValueIncludedFeatureEnum|null);
            note?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVersionFeatureValue.$Properties;
    }

    enum GameVersionFeatureValueIncludedFeatureEnum {
        NOT_INCLUDED = 0,
        INCLUDED = 1,
        PRE_ORDER_ONLY = 2
    }

    interface IGameVideoResult extends proto.GameVideoResult.$Properties {
    }

    class GameVideoResult {
        constructor(properties?: proto.GameVideoResult.$Properties);
        $unknowns?: Uint8Array[];
        gamevideos: proto.GameVideo.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVideoResult {
        interface $Properties {
            gamevideos?: (proto.GameVideo.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVideoResult.$Properties;
    }

    interface IGameVideo extends proto.GameVideo.$Properties {
    }

    class GameVideo {
        constructor(properties?: proto.GameVideo.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game?: (proto.Game.$Properties|null);
        name: string;
        video_id: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace GameVideo {
        interface $Properties {
            id?: (number|null);
            game?: (proto.Game.$Properties|null);
            name?: (string|null);
            video_id?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GameVideo.$Properties;
    }

    interface IGenreResult extends proto.GenreResult.$Properties {
    }

    class GenreResult {
        constructor(properties?: proto.GenreResult.$Properties);
        $unknowns?: Uint8Array[];
        genres: proto.Genre.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace GenreResult {
        interface $Properties {
            genres?: (proto.Genre.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.GenreResult.$Properties;
    }

    interface IGenre extends proto.Genre.$Properties {
    }

    class Genre {
        constructor(properties?: proto.Genre.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Genre {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Genre.$Properties;
    }

    interface IInvolvedCompanyResult extends proto.InvolvedCompanyResult.$Properties {
    }

    class InvolvedCompanyResult {
        constructor(properties?: proto.InvolvedCompanyResult.$Properties);
        $unknowns?: Uint8Array[];
        involvedcompanies: proto.InvolvedCompany.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace InvolvedCompanyResult {
        interface $Properties {
            involvedcompanies?: (proto.InvolvedCompany.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.InvolvedCompanyResult.$Properties;
    }

    interface IInvolvedCompany extends proto.InvolvedCompany.$Properties {
    }

    class InvolvedCompany {
        constructor(properties?: proto.InvolvedCompany.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        company?: (proto.Company.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        developer: boolean;
        game?: (proto.Game.$Properties|null);
        porting: boolean;
        publisher: boolean;
        supporting: boolean;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace InvolvedCompany {
        interface $Properties {
            id?: (number|null);
            company?: (proto.Company.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            developer?: (boolean|null);
            game?: (proto.Game.$Properties|null);
            porting?: (boolean|null);
            publisher?: (boolean|null);
            supporting?: (boolean|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.InvolvedCompany.$Properties;
    }

    interface IKeywordResult extends proto.KeywordResult.$Properties {
    }

    class KeywordResult {
        constructor(properties?: proto.KeywordResult.$Properties);
        $unknowns?: Uint8Array[];
        keywords: proto.Keyword.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace KeywordResult {
        interface $Properties {
            keywords?: (proto.Keyword.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.KeywordResult.$Properties;
    }

    interface IKeyword extends proto.Keyword.$Properties {
    }

    class Keyword {
        constructor(properties?: proto.Keyword.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Keyword {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Keyword.$Properties;
    }

    interface ILanguageResult extends proto.LanguageResult.$Properties {
    }

    class LanguageResult {
        constructor(properties?: proto.LanguageResult.$Properties);
        $unknowns?: Uint8Array[];
        languages: proto.Language.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace LanguageResult {
        interface $Properties {
            languages?: (proto.Language.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.LanguageResult.$Properties;
    }

    interface ILanguage extends proto.Language.$Properties {
    }

    class Language {
        constructor(properties?: proto.Language.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        native_name: string;
        locale: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Language {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            native_name?: (string|null);
            locale?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Language.$Properties;
    }

    interface ILanguageSupportResult extends proto.LanguageSupportResult.$Properties {
    }

    class LanguageSupportResult {
        constructor(properties?: proto.LanguageSupportResult.$Properties);
        $unknowns?: Uint8Array[];
        languagesupports: proto.LanguageSupport.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace LanguageSupportResult {
        interface $Properties {
            languagesupports?: (proto.LanguageSupport.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.LanguageSupportResult.$Properties;
    }

    interface ILanguageSupport extends proto.LanguageSupport.$Properties {
    }

    class LanguageSupport {
        constructor(properties?: proto.LanguageSupport.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game?: (proto.Game.$Properties|null);
        language?: (proto.Language.$Properties|null);
        language_support_type?: (proto.LanguageSupportType.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace LanguageSupport {
        interface $Properties {
            id?: (number|null);
            game?: (proto.Game.$Properties|null);
            language?: (proto.Language.$Properties|null);
            language_support_type?: (proto.LanguageSupportType.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.LanguageSupport.$Properties;
    }

    interface ILanguageSupportTypeResult extends proto.LanguageSupportTypeResult.$Properties {
    }

    class LanguageSupportTypeResult {
        constructor(properties?: proto.LanguageSupportTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        languagesupporttypes: proto.LanguageSupportType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace LanguageSupportTypeResult {
        interface $Properties {
            languagesupporttypes?: (proto.LanguageSupportType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.LanguageSupportTypeResult.$Properties;
    }

    interface ILanguageSupportType extends proto.LanguageSupportType.$Properties {
    }

    class LanguageSupportType {
        constructor(properties?: proto.LanguageSupportType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace LanguageSupportType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.LanguageSupportType.$Properties;
    }

    interface IMultiplayerModeResult extends proto.MultiplayerModeResult.$Properties {
    }

    class MultiplayerModeResult {
        constructor(properties?: proto.MultiplayerModeResult.$Properties);
        $unknowns?: Uint8Array[];
        multiplayermodes: proto.MultiplayerMode.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiplayerModeResult {
        interface $Properties {
            multiplayermodes?: (proto.MultiplayerMode.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.MultiplayerModeResult.$Properties;
    }

    interface IMultiplayerMode extends proto.MultiplayerMode.$Properties {
    }

    class MultiplayerMode {
        constructor(properties?: proto.MultiplayerMode.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        campaigncoop: boolean;
        dropin: boolean;
        game?: (proto.Game.$Properties|null);
        lancoop: boolean;
        offlinecoop: boolean;
        offlinecoopmax: number;
        offlinemax: number;
        onlinecoop: boolean;
        onlinecoopmax: number;
        onlinemax: number;
        platform?: (proto.Platform.$Properties|null);
        splitscreen: boolean;
        splitscreenonline: boolean;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace MultiplayerMode {
        interface $Properties {
            id?: (number|null);
            campaigncoop?: (boolean|null);
            dropin?: (boolean|null);
            game?: (proto.Game.$Properties|null);
            lancoop?: (boolean|null);
            offlinecoop?: (boolean|null);
            offlinecoopmax?: (number|null);
            offlinemax?: (number|null);
            onlinecoop?: (boolean|null);
            onlinecoopmax?: (number|null);
            onlinemax?: (number|null);
            platform?: (proto.Platform.$Properties|null);
            splitscreen?: (boolean|null);
            splitscreenonline?: (boolean|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.MultiplayerMode.$Properties;
    }

    interface INetworkTypeResult extends proto.NetworkTypeResult.$Properties {
    }

    class NetworkTypeResult {
        constructor(properties?: proto.NetworkTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        networktypes: proto.NetworkType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace NetworkTypeResult {
        interface $Properties {
            networktypes?: (proto.NetworkType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.NetworkTypeResult.$Properties;
    }

    interface INetworkType extends proto.NetworkType.$Properties {
    }

    class NetworkType {
        constructor(properties?: proto.NetworkType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        event_networks: proto.EventNetwork.$Properties[];
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace NetworkType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            event_networks?: (proto.EventNetwork.$Properties[]|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.NetworkType.$Properties;
    }

    interface IPlatformResult extends proto.PlatformResult.$Properties {
    }

    class PlatformResult {
        constructor(properties?: proto.PlatformResult.$Properties);
        $unknowns?: Uint8Array[];
        platforms: proto.Platform.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformResult {
        interface $Properties {
            platforms?: (proto.Platform.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformResult.$Properties;
    }

    interface IPlatform extends proto.Platform.$Properties {
    }

    class Platform {
        constructor(properties?: proto.Platform.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        abbreviation: string;
        alternative_name: string;
        category: proto.PlatformCategoryEnum;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        generation: number;
        name: string;
        platform_logo?: (proto.PlatformLogo.$Properties|null);
        platform_family?: (proto.PlatformFamily.$Properties|null);
        slug: string;
        summary: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        versions: proto.PlatformVersion.$Properties[];
        websites: proto.PlatformWebsite.$Properties[];
        checksum: string;
        platform_type?: (proto.PlatformType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Platform {
        interface $Properties {
            id?: (number|null);
            abbreviation?: (string|null);
            alternative_name?: (string|null);
            category?: (proto.PlatformCategoryEnum|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            generation?: (number|null);
            name?: (string|null);
            platform_logo?: (proto.PlatformLogo.$Properties|null);
            platform_family?: (proto.PlatformFamily.$Properties|null);
            slug?: (string|null);
            summary?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            versions?: (proto.PlatformVersion.$Properties[]|null);
            websites?: (proto.PlatformWebsite.$Properties[]|null);
            checksum?: (string|null);
            platform_type?: (proto.PlatformType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Platform.$Properties;
    }

    enum PlatformCategoryEnum {
        PLATFORM_CATEGORY_NULL = 0,
        CONSOLE = 1,
        ARCADE = 2,
        PLATFORM = 3,
        OPERATING_SYSTEM = 4,
        PORTABLE_CONSOLE = 5,
        COMPUTER = 6
    }

    interface IPlatformFamilyResult extends proto.PlatformFamilyResult.$Properties {
    }

    class PlatformFamilyResult {
        constructor(properties?: proto.PlatformFamilyResult.$Properties);
        $unknowns?: Uint8Array[];
        platformfamilies: proto.PlatformFamily.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformFamilyResult {
        interface $Properties {
            platformfamilies?: (proto.PlatformFamily.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformFamilyResult.$Properties;
    }

    interface IPlatformFamily extends proto.PlatformFamily.$Properties {
    }

    class PlatformFamily {
        constructor(properties?: proto.PlatformFamily.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        slug: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformFamily {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            slug?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformFamily.$Properties;
    }

    interface IPlatformLogoResult extends proto.PlatformLogoResult.$Properties {
    }

    class PlatformLogoResult {
        constructor(properties?: proto.PlatformLogoResult.$Properties);
        $unknowns?: Uint8Array[];
        platformlogos: proto.PlatformLogo.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformLogoResult {
        interface $Properties {
            platformlogos?: (proto.PlatformLogo.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformLogoResult.$Properties;
    }

    interface IPlatformLogo extends proto.PlatformLogo.$Properties {
    }

    class PlatformLogo {
        constructor(properties?: proto.PlatformLogo.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformLogo {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformLogo.$Properties;
    }

    interface IPlatformTypeResult extends proto.PlatformTypeResult.$Properties {
    }

    class PlatformTypeResult {
        constructor(properties?: proto.PlatformTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        platformtypes: proto.PlatformType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformTypeResult {
        interface $Properties {
            platformtypes?: (proto.PlatformType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformTypeResult.$Properties;
    }

    interface IPlatformType extends proto.PlatformType.$Properties {
    }

    class PlatformType {
        constructor(properties?: proto.PlatformType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformType.$Properties;
    }

    interface IPlatformVersionResult extends proto.PlatformVersionResult.$Properties {
    }

    class PlatformVersionResult {
        constructor(properties?: proto.PlatformVersionResult.$Properties);
        $unknowns?: Uint8Array[];
        platformversions: proto.PlatformVersion.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersionResult {
        interface $Properties {
            platformversions?: (proto.PlatformVersion.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersionResult.$Properties;
    }

    interface IPlatformVersion extends proto.PlatformVersion.$Properties {
    }

    class PlatformVersion {
        constructor(properties?: proto.PlatformVersion.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        companies: proto.PlatformVersionCompany.$Properties[];
        connectivity: string;
        cpu: string;
        graphics: string;
        main_manufacturer?: (proto.PlatformVersionCompany.$Properties|null);
        media: string;
        memory: string;
        name: string;
        os: string;
        output: string;
        platform_logo?: (proto.PlatformLogo.$Properties|null);
        platform_version_release_dates: proto.PlatformVersionReleaseDate.$Properties[];
        resolutions: string;
        slug: string;
        sound: string;
        storage: string;
        summary: string;
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersion {
        interface $Properties {
            id?: (number|null);
            companies?: (proto.PlatformVersionCompany.$Properties[]|null);
            connectivity?: (string|null);
            cpu?: (string|null);
            graphics?: (string|null);
            main_manufacturer?: (proto.PlatformVersionCompany.$Properties|null);
            media?: (string|null);
            memory?: (string|null);
            name?: (string|null);
            os?: (string|null);
            output?: (string|null);
            platform_logo?: (proto.PlatformLogo.$Properties|null);
            platform_version_release_dates?: (proto.PlatformVersionReleaseDate.$Properties[]|null);
            resolutions?: (string|null);
            slug?: (string|null);
            sound?: (string|null);
            storage?: (string|null);
            summary?: (string|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersion.$Properties;
    }

    interface IPlatformVersionCompanyResult extends proto.PlatformVersionCompanyResult.$Properties {
    }

    class PlatformVersionCompanyResult {
        constructor(properties?: proto.PlatformVersionCompanyResult.$Properties);
        $unknowns?: Uint8Array[];
        platformversioncompanies: proto.PlatformVersionCompany.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersionCompanyResult {
        interface $Properties {
            platformversioncompanies?: (proto.PlatformVersionCompany.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersionCompanyResult.$Properties;
    }

    interface IPlatformVersionCompany extends proto.PlatformVersionCompany.$Properties {
    }

    class PlatformVersionCompany {
        constructor(properties?: proto.PlatformVersionCompany.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        comment: string;
        company?: (proto.Company.$Properties|null);
        developer: boolean;
        manufacturer: boolean;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersionCompany {
        interface $Properties {
            id?: (number|null);
            comment?: (string|null);
            company?: (proto.Company.$Properties|null);
            developer?: (boolean|null);
            manufacturer?: (boolean|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersionCompany.$Properties;
    }

    interface IPlatformVersionReleaseDateResult extends proto.PlatformVersionReleaseDateResult.$Properties {
    }

    class PlatformVersionReleaseDateResult {
        constructor(properties?: proto.PlatformVersionReleaseDateResult.$Properties);
        $unknowns?: Uint8Array[];
        platformversionreleasedates: proto.PlatformVersionReleaseDate.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersionReleaseDateResult {
        interface $Properties {
            platformversionreleasedates?: (proto.PlatformVersionReleaseDate.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersionReleaseDateResult.$Properties;
    }

    interface IPlatformVersionReleaseDate extends proto.PlatformVersionReleaseDate.$Properties {
    }

    class PlatformVersionReleaseDate {
        constructor(properties?: proto.PlatformVersionReleaseDate.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.DateFormatChangeDateCategoryEnum;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        date?: (google.protobuf.Timestamp.$Properties|null);
        human: string;
        m: number;
        platform_version?: (proto.PlatformVersion.$Properties|null);
        region: proto.RegionRegionEnum;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        y: number;
        checksum: string;
        date_format?: (proto.DateFormat.$Properties|null);
        release_region?: (proto.ReleaseDateRegion.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformVersionReleaseDate {
        interface $Properties {
            id?: (number|null);
            category?: (proto.DateFormatChangeDateCategoryEnum|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            date?: (google.protobuf.Timestamp.$Properties|null);
            human?: (string|null);
            m?: (number|null);
            platform_version?: (proto.PlatformVersion.$Properties|null);
            region?: (proto.RegionRegionEnum|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            y?: (number|null);
            checksum?: (string|null);
            date_format?: (proto.DateFormat.$Properties|null);
            release_region?: (proto.ReleaseDateRegion.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformVersionReleaseDate.$Properties;
    }

    enum RegionRegionEnum {
        REGION_REGION_NULL = 0,
        EUROPE = 1,
        NORTH_AMERICA = 2,
        AUSTRALIA = 3,
        NEW_ZEALAND = 4,
        JAPAN = 5,
        CHINA = 6,
        ASIA = 7,
        WORLDWIDE = 8,
        KOREA = 9,
        BRAZIL = 10
    }

    interface IPlatformWebsiteResult extends proto.PlatformWebsiteResult.$Properties {
    }

    class PlatformWebsiteResult {
        constructor(properties?: proto.PlatformWebsiteResult.$Properties);
        $unknowns?: Uint8Array[];
        platformwebsites: proto.PlatformWebsite.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformWebsiteResult {
        interface $Properties {
            platformwebsites?: (proto.PlatformWebsite.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformWebsiteResult.$Properties;
    }

    interface IPlatformWebsite extends proto.PlatformWebsite.$Properties {
    }

    class PlatformWebsite {
        constructor(properties?: proto.PlatformWebsite.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.WebsiteCategoryEnum;
        trusted: boolean;
        url: string;
        checksum: string;
        type?: (proto.WebsiteType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlatformWebsite {
        interface $Properties {
            id?: (number|null);
            category?: (proto.WebsiteCategoryEnum|null);
            trusted?: (boolean|null);
            url?: (string|null);
            checksum?: (string|null);
            type?: (proto.WebsiteType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlatformWebsite.$Properties;
    }

    interface IPlayerPerspectiveResult extends proto.PlayerPerspectiveResult.$Properties {
    }

    class PlayerPerspectiveResult {
        constructor(properties?: proto.PlayerPerspectiveResult.$Properties);
        $unknowns?: Uint8Array[];
        playerperspectives: proto.PlayerPerspective.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerPerspectiveResult {
        interface $Properties {
            playerperspectives?: (proto.PlayerPerspective.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlayerPerspectiveResult.$Properties;
    }

    interface IPlayerPerspective extends proto.PlayerPerspective.$Properties {
    }

    class PlayerPerspective {
        constructor(properties?: proto.PlayerPerspective.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerPerspective {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PlayerPerspective.$Properties;
    }

    interface IPopularityPrimitiveResult extends proto.PopularityPrimitiveResult.$Properties {
    }

    class PopularityPrimitiveResult {
        constructor(properties?: proto.PopularityPrimitiveResult.$Properties);
        $unknowns?: Uint8Array[];
        popularityprimitives: proto.PopularityPrimitive.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PopularityPrimitiveResult {
        interface $Properties {
            popularityprimitives?: (proto.PopularityPrimitive.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PopularityPrimitiveResult.$Properties;
    }

    interface IPopularityPrimitive extends proto.PopularityPrimitive.$Properties {
    }

    class PopularityPrimitive {
        constructor(properties?: proto.PopularityPrimitive.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        game_id: number;
        popularity_type?: (proto.PopularityType.$Properties|null);
        popularity_source: proto.PopularitySourcePopularitySourceEnum;
        value: number;
        calculated_at?: (google.protobuf.Timestamp.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        external_popularity_source?: (proto.ExternalGameSource.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace PopularityPrimitive {
        interface $Properties {
            id?: (number|null);
            game_id?: (number|null);
            popularity_type?: (proto.PopularityType.$Properties|null);
            popularity_source?: (proto.PopularitySourcePopularitySourceEnum|null);
            value?: (number|null);
            calculated_at?: (google.protobuf.Timestamp.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            external_popularity_source?: (proto.ExternalGameSource.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PopularityPrimitive.$Properties;
    }

    enum PopularitySourcePopularitySourceEnum {
        POPULARITYSOURCE_POPULARITY_SOURCE_NULL = 0,
        IGDB = 121
    }

    interface IPopularityTypeResult extends proto.PopularityTypeResult.$Properties {
    }

    class PopularityTypeResult {
        constructor(properties?: proto.PopularityTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        popularitytypes: proto.PopularityType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace PopularityTypeResult {
        interface $Properties {
            popularitytypes?: (proto.PopularityType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PopularityTypeResult.$Properties;
    }

    interface IPopularityType extends proto.PopularityType.$Properties {
    }

    class PopularityType {
        constructor(properties?: proto.PopularityType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        popularity_source: proto.PopularitySourcePopularitySourceEnum;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        external_popularity_source?: (proto.ExternalGameSource.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace PopularityType {
        interface $Properties {
            id?: (number|null);
            popularity_source?: (proto.PopularitySourcePopularitySourceEnum|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            external_popularity_source?: (proto.ExternalGameSource.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.PopularityType.$Properties;
    }

    interface IRegionResult extends proto.RegionResult.$Properties {
    }

    class RegionResult {
        constructor(properties?: proto.RegionResult.$Properties);
        $unknowns?: Uint8Array[];
        regions: proto.Region.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace RegionResult {
        interface $Properties {
            regions?: (proto.Region.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.RegionResult.$Properties;
    }

    interface IRegion extends proto.Region.$Properties {
    }

    class Region {
        constructor(properties?: proto.Region.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        category: string;
        identifier: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Region {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            category?: (string|null);
            identifier?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Region.$Properties;
    }

    interface IReleaseDateResult extends proto.ReleaseDateResult.$Properties {
    }

    class ReleaseDateResult {
        constructor(properties?: proto.ReleaseDateResult.$Properties);
        $unknowns?: Uint8Array[];
        releasedates: proto.ReleaseDate.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDateResult {
        interface $Properties {
            releasedates?: (proto.ReleaseDate.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDateResult.$Properties;
    }

    interface IReleaseDate extends proto.ReleaseDate.$Properties {
    }

    class ReleaseDate {
        constructor(properties?: proto.ReleaseDate.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.DateFormatChangeDateCategoryEnum;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        date?: (google.protobuf.Timestamp.$Properties|null);
        game?: (proto.Game.$Properties|null);
        human: string;
        m: number;
        platform?: (proto.Platform.$Properties|null);
        region: proto.RegionRegionEnum;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        y: number;
        checksum: string;
        status?: (proto.ReleaseDateStatus.$Properties|null);
        date_format?: (proto.DateFormat.$Properties|null);
        release_region?: (proto.ReleaseDateRegion.$Properties|null);
        d: number;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDate {
        interface $Properties {
            id?: (number|null);
            category?: (proto.DateFormatChangeDateCategoryEnum|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            date?: (google.protobuf.Timestamp.$Properties|null);
            game?: (proto.Game.$Properties|null);
            human?: (string|null);
            m?: (number|null);
            platform?: (proto.Platform.$Properties|null);
            region?: (proto.RegionRegionEnum|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            y?: (number|null);
            checksum?: (string|null);
            status?: (proto.ReleaseDateStatus.$Properties|null);
            date_format?: (proto.DateFormat.$Properties|null);
            release_region?: (proto.ReleaseDateRegion.$Properties|null);
            d?: (number|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDate.$Properties;
    }

    interface IReleaseDateRegionResult extends proto.ReleaseDateRegionResult.$Properties {
    }

    class ReleaseDateRegionResult {
        constructor(properties?: proto.ReleaseDateRegionResult.$Properties);
        $unknowns?: Uint8Array[];
        releasedateregions: proto.ReleaseDateRegion.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDateRegionResult {
        interface $Properties {
            releasedateregions?: (proto.ReleaseDateRegion.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDateRegionResult.$Properties;
    }

    interface IReleaseDateRegion extends proto.ReleaseDateRegion.$Properties {
    }

    class ReleaseDateRegion {
        constructor(properties?: proto.ReleaseDateRegion.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        region: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDateRegion {
        interface $Properties {
            id?: (number|null);
            region?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDateRegion.$Properties;
    }

    interface IReleaseDateStatusResult extends proto.ReleaseDateStatusResult.$Properties {
    }

    class ReleaseDateStatusResult {
        constructor(properties?: proto.ReleaseDateStatusResult.$Properties);
        $unknowns?: Uint8Array[];
        releasedatestatuses: proto.ReleaseDateStatus.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDateStatusResult {
        interface $Properties {
            releasedatestatuses?: (proto.ReleaseDateStatus.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDateStatusResult.$Properties;
    }

    interface IReleaseDateStatus extends proto.ReleaseDateStatus.$Properties {
    }

    class ReleaseDateStatus {
        constructor(properties?: proto.ReleaseDateStatus.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        description: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReleaseDateStatus {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            description?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReleaseDateStatus.$Properties;
    }

    interface IReportResult extends proto.ReportResult.$Properties {
    }

    class ReportResult {
        constructor(properties?: proto.ReportResult.$Properties);
        $unknowns?: Uint8Array[];
        reports: proto.Report.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReportResult {
        interface $Properties {
            reports?: (proto.Report.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReportResult.$Properties;
    }

    interface IReport extends proto.Report.$Properties {
    }

    class Report {
        constructor(properties?: proto.Report.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        source_item_id: number;
        target_item_id: number;
        report_type?: (proto.ReportType.$Properties|null);
        entity_type?: (proto.EntityType.$Properties|null);
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Report {
        interface $Properties {
            id?: (number|null);
            source_item_id?: (number|null);
            target_item_id?: (number|null);
            report_type?: (proto.ReportType.$Properties|null);
            entity_type?: (proto.EntityType.$Properties|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Report.$Properties;
    }

    interface IReportTypeResult extends proto.ReportTypeResult.$Properties {
    }

    class ReportTypeResult {
        constructor(properties?: proto.ReportTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        reporttypes: proto.ReportType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReportTypeResult {
        interface $Properties {
            reporttypes?: (proto.ReportType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReportTypeResult.$Properties;
    }

    interface IReportType extends proto.ReportType.$Properties {
    }

    class ReportType {
        constructor(properties?: proto.ReportType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        name: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReportType {
        interface $Properties {
            id?: (number|null);
            name?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ReportType.$Properties;
    }

    interface IScreenshotResult extends proto.ScreenshotResult.$Properties {
    }

    class ScreenshotResult {
        constructor(properties?: proto.ScreenshotResult.$Properties);
        $unknowns?: Uint8Array[];
        screenshots: proto.Screenshot.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ScreenshotResult {
        interface $Properties {
            screenshots?: (proto.Screenshot.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ScreenshotResult.$Properties;
    }

    interface IScreenshot extends proto.Screenshot.$Properties {
    }

    class Screenshot {
        constructor(properties?: proto.Screenshot.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alpha_channel: boolean;
        animated: boolean;
        game?: (proto.Game.$Properties|null);
        height: number;
        image_id: string;
        url: string;
        width: number;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Screenshot {
        interface $Properties {
            id?: (number|null);
            alpha_channel?: (boolean|null);
            animated?: (boolean|null);
            game?: (proto.Game.$Properties|null);
            height?: (number|null);
            image_id?: (string|null);
            url?: (string|null);
            width?: (number|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Screenshot.$Properties;
    }

    interface ISearchResult extends proto.SearchResult.$Properties {
    }

    class SearchResult {
        constructor(properties?: proto.SearchResult.$Properties);
        $unknowns?: Uint8Array[];
        searches: proto.Search.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace SearchResult {
        interface $Properties {
            searches?: (proto.Search.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.SearchResult.$Properties;
    }

    interface ISearch extends proto.Search.$Properties {
    }

    class Search {
        constructor(properties?: proto.Search.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        alternative_name: string;
        character?: (proto.Character.$Properties|null);
        collection?: (proto.Collection.$Properties|null);
        company?: (proto.Company.$Properties|null);
        description: string;
        game?: (proto.Game.$Properties|null);
        name: string;
        platform?: (proto.Platform.$Properties|null);
        published_at?: (google.protobuf.Timestamp.$Properties|null);
        test_dummy?: (proto.TestDummy.$Properties|null);
        theme?: (proto.Theme.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Search {
        interface $Properties {
            id?: (number|null);
            alternative_name?: (string|null);
            character?: (proto.Character.$Properties|null);
            collection?: (proto.Collection.$Properties|null);
            company?: (proto.Company.$Properties|null);
            description?: (string|null);
            game?: (proto.Game.$Properties|null);
            name?: (string|null);
            platform?: (proto.Platform.$Properties|null);
            published_at?: (google.protobuf.Timestamp.$Properties|null);
            test_dummy?: (proto.TestDummy.$Properties|null);
            theme?: (proto.Theme.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Search.$Properties;
    }

    interface ITestDummyResult extends proto.TestDummyResult.$Properties {
    }

    class TestDummyResult {
        constructor(properties?: proto.TestDummyResult.$Properties);
        $unknowns?: Uint8Array[];
        testdummies: proto.TestDummy.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace TestDummyResult {
        interface $Properties {
            testdummies?: (proto.TestDummy.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.TestDummyResult.$Properties;
    }

    interface ITestDummy extends proto.TestDummy.$Properties {
    }

    class TestDummy {
        constructor(properties?: proto.TestDummy.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        bool_value: boolean;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        enum_test: proto.TestDummyEnumTestEnum;
        float_value: number;
        game?: (proto.Game.$Properties|null);
        integer_array: number[];
        integer_value: number;
        name: string;
        new_integer_value: number;
        private: boolean;
        slug: string;
        string_array: string[];
        test_dummies: proto.TestDummy.$Properties[];
        test_dummy?: (proto.TestDummy.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace TestDummy {
        interface $Properties {
            id?: (number|null);
            bool_value?: (boolean|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            enum_test?: (proto.TestDummyEnumTestEnum|null);
            float_value?: (number|null);
            game?: (proto.Game.$Properties|null);
            integer_array?: (number[]|null);
            integer_value?: (number|null);
            name?: (string|null);
            new_integer_value?: (number|null);
            "private"?: (boolean|null);
            slug?: (string|null);
            string_array?: (string[]|null);
            test_dummies?: (proto.TestDummy.$Properties[]|null);
            test_dummy?: (proto.TestDummy.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.TestDummy.$Properties;
    }

    enum TestDummyEnumTestEnum {
        TESTDUMMY_ENUM_TEST_NULL = 0,
        ENUM1 = 1,
        ENUM2 = 2
    }

    interface IThemeResult extends proto.ThemeResult.$Properties {
    }

    class ThemeResult {
        constructor(properties?: proto.ThemeResult.$Properties);
        $unknowns?: Uint8Array[];
        themes: proto.Theme.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace ThemeResult {
        interface $Properties {
            themes?: (proto.Theme.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.ThemeResult.$Properties;
    }

    interface ITheme extends proto.Theme.$Properties {
    }

    class Theme {
        constructor(properties?: proto.Theme.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        name: string;
        slug: string;
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        url: string;
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace Theme {
        interface $Properties {
            id?: (number|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            name?: (string|null);
            slug?: (string|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            url?: (string|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Theme.$Properties;
    }

    interface IWebsiteResult extends proto.WebsiteResult.$Properties {
    }

    class WebsiteResult {
        constructor(properties?: proto.WebsiteResult.$Properties);
        $unknowns?: Uint8Array[];
        websites: proto.Website.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace WebsiteResult {
        interface $Properties {
            websites?: (proto.Website.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.WebsiteResult.$Properties;
    }

    interface IWebsite extends proto.Website.$Properties {
    }

    class Website {
        constructor(properties?: proto.Website.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        category: proto.WebsiteCategoryEnum;
        game?: (proto.Game.$Properties|null);
        trusted: boolean;
        url: string;
        checksum: string;
        type?: (proto.WebsiteType.$Properties|null);
        static getTypeUrl(prefix?: string): string;
    }

    namespace Website {
        interface $Properties {
            id?: (number|null);
            category?: (proto.WebsiteCategoryEnum|null);
            game?: (proto.Game.$Properties|null);
            trusted?: (boolean|null);
            url?: (string|null);
            checksum?: (string|null);
            type?: (proto.WebsiteType.$Properties|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.Website.$Properties;
    }

    interface IWebsiteTypeResult extends proto.WebsiteTypeResult.$Properties {
    }

    class WebsiteTypeResult {
        constructor(properties?: proto.WebsiteTypeResult.$Properties);
        $unknowns?: Uint8Array[];
        websitetypes: proto.WebsiteType.$Properties[];
        static getTypeUrl(prefix?: string): string;
    }

    namespace WebsiteTypeResult {
        interface $Properties {
            websitetypes?: (proto.WebsiteType.$Properties[]|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.WebsiteTypeResult.$Properties;
    }

    interface IWebsiteType extends proto.WebsiteType.$Properties {
    }

    class WebsiteType {
        constructor(properties?: proto.WebsiteType.$Properties);
        $unknowns?: Uint8Array[];
        id: number;
        type: string;
        created_at?: (google.protobuf.Timestamp.$Properties|null);
        updated_at?: (google.protobuf.Timestamp.$Properties|null);
        checksum: string;
        static getTypeUrl(prefix?: string): string;
    }

    namespace WebsiteType {
        interface $Properties {
            id?: (number|null);
            type?: (string|null);
            created_at?: (google.protobuf.Timestamp.$Properties|null);
            updated_at?: (google.protobuf.Timestamp.$Properties|null);
            checksum?: (string|null);
            $unknowns?: Uint8Array[];
        }
        type $Shape = proto.WebsiteType.$Properties;
    }
}

export namespace google {

    namespace protobuf {

        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        class Timestamp {
            constructor(properties?: google.protobuf.Timestamp.$Properties);
            $unknowns?: Uint8Array[];
            seconds: number;
            nanos: number;
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {
            interface $Properties {
                seconds?: (number|null);
                nanos?: (number|null);
                $unknowns?: Uint8Array[];
            }
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
